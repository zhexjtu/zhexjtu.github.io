---
title: "LLM Post-Training for Beginners: SFT, DPO, and GRPO"
description: "A beginner-friendly guide to the three feedback signals behind modern LLM post-training: demonstrations, preferences, and rewards."
publishedAt: 2026-11-14
tags: ["LLM post-training", "Reinforcement learning", "Alignment"]
draft: false
featured: true
slides:
  title: "LLM Post-Training for Beginners: SFT, DPO, and GRPO"
  count: 23
  imageBase: "/images/blog/llm-post-training-sft-dpo-grpo"
  downloadHref: "/slides/llm-post-training-sft-dpo-grpo.pptx"
---

Pretraining gives a language model broad capability. Post-training turns that capability into useful behavior.

The central question is always the same: **how do we tell the model what “better” looks like?** The answer determines the data we collect and the optimization method we use. Supervised fine-tuning (SFT) learns from demonstrations. Direct preference optimization (DPO) learns from comparisons. Group relative policy optimization (GRPO) learns from rewards assigned to model-generated attempts.

These methods are complementary. A practical training program often uses each one where its feedback signal is clearest.

## The common feedback loop

Every post-training method can be viewed as a loop:

1. Give the model a prompt.
2. Obtain one or more responses.
3. Evaluate those responses using a demonstration, preference, or reward.
4. Update the model so that better behavior becomes more likely.

The algorithms differ mainly in step three. That difference changes the data requirements, the training objective, and the kinds of behavior the method can express.

## SFT: learn from demonstrations

Supervised fine-tuning provides a prompt and a high-quality target answer. The model learns to make each demonstrated token more likely.

For a prompt $x$ and target response $y = (y_1, \ldots, y_T)$, let $y_{1:t-1}$ denote the target tokens before position $t$. The high-level objective is:

$$
\max_{\theta} \sum_{t=1}^{T} \log \pi_{\theta}\!\left(y_t \mid x, y_{1:t-1}\right)
$$

Here, $\pi_{\theta}$ is the model policy and $\theta$ denotes its trainable parameters. During training, teacher forcing reveals the correct previous tokens. Every target token contributes a gradient, which makes SFT efficient and stable.

### What SFT does well

SFT works best when experts can demonstrate the desired behavior directly. It is a strong choice for teaching:

- response format and tone;
- domain-specific conventions;
- tool-call schemas;
- standard task patterns;
- a reliable starting policy for later preference or reinforcement learning.

Its main limitation comes from the same structure that makes it simple. Each example usually presents one “right” answer. The training signal does not naturally say that two answers are acceptable but one is clearer, safer, or more useful.

## DPO: learn from comparisons

Sometimes judging two responses is easier than writing the perfect one. DPO uses a prompt, a chosen response, and a rejected response. It updates the policy so the chosen answer becomes more likely relative to the rejected answer.

A useful intuition is:

$$
\text{increase } \log \pi_{\theta}\!\left(y_{\mathrm{chosen}} \mid x\right)
- \log \pi_{\theta}\!\left(y_{\mathrm{rejected}} \mid x\right)
$$

The full DPO objective also compares the policy against a fixed reference model. The reference acts as an anchor, discouraging the model from moving too far from its starting behavior while it learns the preference.

### When DPO fits

DPO is useful when reviewers can make consistent pairwise judgments about qualities such as helpfulness, style, concision, or safety. It avoids fitting a separate reward model and does not require on-policy sampling during the preference-training update.

The quality of the method still depends on the preference data. Ambiguous guidelines, inconsistent raters, and systematic annotator bias become part of the training signal. Before scaling a DPO run, I would inspect agreement rates and the failure cases where preferences are unstable.

## GRPO: learn from sampled outcomes

GRPO starts from a different kind of supervision. For each prompt, the current policy generates a group of candidate responses. A reward function scores them, and the group provides a local baseline for deciding which attempts performed better.

For a prompt $q$, the old policy $\pi_{\theta_{\mathrm{old}}}$ samples a group of $G$ responses $o_1, \ldots, o_G$. Their rewards form the vector $\mathbf{r} = (r_1, \ldots, r_G)$. Under outcome supervision, every token $t$ in response $i$ receives the group-normalized advantage:

$$
\widehat{A}_{i,t}
= \widetilde{r}_i
= \frac{r_i - \operatorname{mean}(\mathbf{r})}
{\operatorname{std}(\mathbf{r})}
$$

The subscript $i$ identifies the sampled response, while $t$ identifies a token inside that response. With one outcome reward per response, $\widehat{A}_{i,t}$ has the same value for every token in $o_i$. Implementations must safely handle groups whose reward standard deviation is zero.

Define the per-token probability ratio as:

$$
\rho_{i,t}(\theta)
= \frac{
\pi_{\theta}\!\left(o_{i,t} \mid q, o_{i,1:t-1}\right)
}{
\pi_{\theta_{\mathrm{old}}}\!\left(o_{i,t} \mid q, o_{i,1:t-1}\right)
}
$$

Leaving the expectation over prompts and sampled groups implicit, the core clipped GRPO objective is:

$$
\begin{aligned}
\mathcal{J}_{\mathrm{GRPO}}(\theta)
&= \frac{1}{G}\sum_{i=1}^{G}\frac{1}{|o_i|}
\sum_{t=1}^{|o_i|}\\
&\quad \left[
\mathcal{L}^{\mathrm{clip}}_{i,t}(\theta)
- \beta D_{\mathrm{KL}}\!\left(\pi_{\theta}\,\|\,\pi_{\mathrm{ref}}\right)
\right].
\end{aligned}
$$

The clipped term is:

$$
\begin{aligned}
\mathcal{L}^{\mathrm{clip}}_{i,t}(\theta)
= \min\!\Big(&\rho_{i,t}(\theta)\widehat{A}_{i,t},\\
&\operatorname{clip}\!\left(
\rho_{i,t}(\theta), 1-\epsilon, 1+\epsilon
\right)\widehat{A}_{i,t}\Big).
\end{aligned}
$$

This clipping limits how far the updated policy can move from the old policy in one step. The KL term, weighted by $\beta$, discourages the policy from drifting too far from the reference model $\pi_{\mathrm{ref}}$. Together, these terms increase the probability of relatively better attempts while keeping the update controlled.

### Why the group baseline matters

Actor-critic methods typically train a separate value model to estimate a baseline. GRPO instead compares samples generated for the same prompt. This removes the learned critic from the optimization structure, which can reduce memory pressure and simplify the training system.

The trade-off is rollout cost. A group requires several fresh generations per prompt. Training performance therefore depends on rollout throughput, reward latency, sampling efficiency, and the balance between generation and policy updates.

### Verifiable tasks are a natural fit

GRPO is especially attractive when outcomes can be checked consistently:

- a math answer matches the reference;
- generated code passes tests;
- structured output satisfies a schema;
- a tool-using agent completes the requested task.

The reward does not need to explain which token caused success. It needs to distinguish better outcomes often enough to steer exploration. Poorly specified rewards can still produce reward hacking, shortcuts, or behavior that scores well without satisfying the real objective.

## SFT, DPO, and GRPO at a glance

| Method | Feedback collected | What the model learns | Good first use |
| --- | --- | --- | --- |
| SFT | A demonstrated answer | Imitate the example | Instruction following and response format |
| DPO | A chosen and rejected pair | Prefer one answer over another | Style, helpfulness, safety, and subjective quality |
| GRPO | Rewards for sampled answers | Repeat attempts that outperform their peers | Math, code, tool use, and other scored outcomes |

The optimizer should follow the feedback signal, not the other way around. If strong demonstrations are available, start with SFT. If comparisons are reliable but ideal answers are expensive, use DPO. If the outcome can be scored and exploration matters, consider GRPO.

## A practical post-training stack

A common progression is:

1. **SFT teaches the expected response shape.** The model learns the task interface and produces outputs that are good enough to evaluate.
2. **DPO resolves quality trade-offs.** Pairwise data sharpens behavior where demonstrations leave several plausible answers.
3. **GRPO optimizes scored outcomes.** The model explores its current behavior space and learns from success or failure.

This order is not mandatory. Each stage only makes sense when its feedback is trustworthy. A small, carefully audited reward set can be more useful than a large training run built around an unreliable metric.

## Engineering matters as much as the equation

For reinforcement learning, the algorithm is only one part of the system. A usable pipeline also needs:

- prompt and rollout data management;
- scalable generation;
- deterministic or well-calibrated reward functions;
- filtering and failure handling;
- reference-policy and KL controls;
- evaluation that catches reward hacking and regressions.

Frameworks such as [verl](https://verl.readthedocs.io/en/latest/) provide an execution layer for rollouts, rewards, and distributed policy updates. They do not decide whether the feedback accurately represents the behavior you want. That remains the core design problem.

## Closing perspective

Post-training is feedback engineering. SFT says “show it.” DPO says “compare it.” GRPO says “score it.”

The best method is the one whose supervision most faithfully captures the desired behavior at a cost you can sustain. In mature systems, the answer is often a combination: demonstrations establish competence, preferences refine judgment, and rewards improve outcomes that can be measured reliably.

## Further reading

- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290)
- [DeepSeekMath and the introduction of GRPO](https://arxiv.org/abs/2402.03300)
- [verl documentation](https://verl.readthedocs.io/en/latest/)
