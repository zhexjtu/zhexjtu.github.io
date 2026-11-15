export const profile = {
  name: 'Zhe Wang',
  role: 'Researcher at Amazon',
  intro:
    'I work on LLM post-training and model customization, reinforcement learning, and AI safety.',
  email: 'zw6sg@virginia.edu',
  linkedin: 'https://www.linkedin.com/in/zhe-wang-119639170/',
  scholar: 'https://scholar.google.com/citations?user=fqNkQjgAAAAJ&hl=en',
  profileImage: '/images/profile/zhe.png' as string | null,
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  summary: string;
  tags: string[];
  art: string;
  tone: 'charcoal' | 'purple' | 'blue' | 'green';
  image?: string;
  imageAlt?: string;
  links: Array<{ label: string; href: string; kind?: 'secondary' }>;
};

export const publications: Publication[] = [
  {
    title:
      'Multi-Turn Reinforcement Learning for Large Language Models: From Theory to Practice with Amazon SageMaker AI',
    authors:
      '<strong>Zhe Wang</strong>, Sapana Chaudhary, Jiayu Li, Yuyang Wang, Xuan Zhu',
    venue: 'KDD 2026 Hands-on Tutorial',
    summary:
      'A hands-on tutorial on building multi-turn reinforcement learning systems for language models, from environment and reward design to trajectory training and evaluation.',
    tags: ['LLM post-training', 'Multi-turn RL'],
    art: 'KDD\n2026',
    tone: 'charcoal',
    links: [],
  },
  {
    title: 'Reinforcing the Generation Order of Multimodal Masked Diffusion Models',
    authors:
      'Yidong Ouyang, <strong>Zhe Wang</strong>, Sourav Bhabesh, Dmitriy Bespalov',
    venue: 'arXiv 2026',
    summary:
      'A learnable controller trained with GRPO chooses the token generation order for masked diffusion models, improving text-to-image alignment and multimodal understanding.',
    tags: ['Multimodal generation', 'GRPO'],
    art: 'ORDER',
    tone: 'blue',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.08056' }],
  },
  {
    title: 'Training-Free Self-Correction for Multimodal Masked Diffusion Models',
    authors:
      'Yidong Ouyang, Panwen Hu, Zhengyan Wan, <strong>Zhe Wang</strong>, Liyan Xie, Dmitriy Bespalov, Ying Nian Wu, Guang Cheng, Hongyuan Zha, Qiang Sun',
    venue: 'arXiv 2026',
    summary:
      'A training-free framework lets multimodal masked diffusion models revisit uncertain tokens during sampling, reducing error accumulation without auxiliary evaluators.',
    tags: ['Masked diffusion', 'Self-correction'],
    art: 'FREE\nCORRECTION',
    tone: 'green',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2602.02927' },
      { label: 'Code', href: 'https://github.com/huge123/FreeCorrection', kind: 'secondary' },
    ],
  },
  {
    title:
      'Graph of Attacks with Pruning: Optimizing Stealthy Jailbreak Prompt Generation for Enhanced LLM Content Moderation',
    authors:
      'Daniel Schwartz, Dmitriy Bespalov, <strong>Zhe Wang</strong>, Ninad Kulkarni, Yanjun Qi',
    venue: 'EMNLP 2025 Industry Track',
    summary:
      'GAP organizes black-box jailbreak search as a graph so attack paths can share useful strategies, while pruning reduces redundant model queries.',
    tags: ['LLM safety', 'Automated red teaming'],
    art: 'GAP',
    tone: 'purple',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-industry.46/' },
      { label: 'PDF', href: 'https://aclanthology.org/2025.emnlp-industry.46.pdf', kind: 'secondary' },
    ],
  },
  {
    title: 'Augmented Adversarial Trigger Learning',
    authors: '<strong>Zhe Wang</strong>, Yanjun Qi',
    venue: 'Findings of NAACL 2025',
    summary:
      'ATLA augments adversarial-trigger objectives to learn more transferable jailbreak suffixes and extract hidden system prompts with substantially fewer queries.',
    tags: ['LLM safety', 'Adversarial ML'],
    art: 'ATLA',
    tone: 'charcoal',
    image: '/images/publications/ATLA.png',
    imageAlt: 'Overview figure from Augmented Adversarial Trigger Learning',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.findings-naacl.394/' },
      { label: 'PDF', href: 'https://aclanthology.org/2025.findings-naacl.394.pdf', kind: 'secondary' },
    ],
  },
  {
    title:
      'TurboFuzzLLM: Turbocharging Mutation-based Fuzzing for Effectively Jailbreaking Large Language Models in Practice',
    authors:
      'Aman Goel, Xian Wu, <strong>Zhe Wang</strong>, Dmitriy Bespalov, Yanjun Qi',
    venue: 'NAACL 2025 Industry Track · Oral',
    summary:
      'TurboFuzzLLM improves mutation-based black-box fuzzing to discover effective jailbreak templates with stronger search policies and lower query cost.',
    tags: ['LLM safety', 'Fuzzing'],
    art: 'TURBO\nFUZZ',
    tone: 'green',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.naacl-industry.43/' },
      { label: 'Code', href: 'https://github.com/amazon-science/TurboFuzzLLM', kind: 'secondary' },
    ],
  },
  {
    title:
      'Hierarchical Prompt Decision Transformer: Improving Few-Shot Policy Generalization with Global and Adaptive Guidance',
    authors: '<strong>Zhe Wang</strong>, Haozhu Wang, Yanjun Qi',
    venue: 'The Web Conference 2025',
    summary:
      'A retrieval-augmented hierarchy of global and adaptive prompt tokens improves few-shot policy generalization across MuJoCo and MetaWorld tasks.',
    tags: ['Reinforcement learning', 'Decision transformers'],
    art: 'HPDT',
    tone: 'purple',
    image: '/images/publications/HPDT.png',
    imageAlt: 'Overview figure from Hierarchical Prompt Decision Transformer',
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/abs/10.1145/3701716.3715233' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2412.00979', kind: 'secondary' },
    ],
  },
  {
    title: 'SD-MAR: Multi-image Analytical Reasoning via Synthetic Data and Reinforcement Learning',
    authors:
      'Shiyu Yuan, Sourav Sanjukta Bhabesh, <strong>Zhe Wang</strong>, Dmitriy Bespalov, Wesley Rose, Huzefa Rangwala',
    venue: 'arXiv 2026',
    summary:
      'SD-MAR builds controlled multi-image reasoning tasks and uses reinforcement learning to improve comparison, change attribution, and quantitative visual reasoning.',
    tags: ['Multimodal reasoning', 'Reinforcement learning'],
    art: 'SD–MAR',
    tone: 'purple',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.14333' }],
  },
  {
    title: 'PGrad: Learning Principal Gradients for Domain Generalization',
    authors: '<strong>Zhe Wang</strong>, Jake Grigsby, Yanjun Qi',
    venue: 'ICLR 2023',
    summary:
      'PGrad aggregates principal directions from optimization trajectories to learn robust update directions that generalize across unseen domains.',
    tags: ['Domain generalization', 'Optimization'],
    art: 'PGRAD',
    tone: 'blue',
    image: '/images/publications/PGrad.png',
    imageAlt: 'Overview figure from PGrad',
    links: [
      { label: 'Paper', href: 'https://openreview.net/forum?id=CgCmwcfgEdH' },
      { label: 'Code', href: 'https://github.com/QData/PGrad', kind: 'secondary' },
    ],
  },
  {
    title: 'Improving Interpretability via Explicit Word Interaction Graph Layer',
    authors:
      'Arshdeep Sekhon, Hanjie Chen, Aman Shrivastava, <strong>Zhe Wang</strong>, Yangfeng Ji, Yanjun Qi',
    venue: 'AAAI 2023 · Oral',
    summary:
      'WIGRAPH learns a global graph of word interactions and inserts graph-based message passing after the embedding layer to improve intrinsic text-model interpretability.',
    tags: ['Interpretability', 'Graph learning'],
    art: 'WIGRAPH',
    tone: 'charcoal',
    links: [
      {
        label: 'PDF',
        href: 'https://ojs.aaai.org/index.php/AAAI/article/download/26586/26358',
      },
    ],
  },
  {
    title: 'ST-MAML: A Stochastic-Task Based Method for Task-Heterogeneous Meta-Learning',
    authors: '<strong>Zhe Wang</strong>, Jake Grigsby, Arshdeep Sekhon, Yanjun Qi',
    venue: 'UAI 2022',
    summary:
      'ST-MAML introduces stochastic task representations that let optimization-based meta-learning adapt across heterogeneous task distributions.',
    tags: ['Meta-learning', 'Task heterogeneity'],
    art: 'ST–MAML',
    tone: 'green',
    imageAlt: 'Overview figure from ST-MAML',
    links: [
      { label: 'Paper', href: 'https://proceedings.mlr.press/v180/wang22c.html' },
      { label: 'PDF', href: 'https://proceedings.mlr.press/v180/wang22c/wang22c.pdf', kind: 'secondary' },
    ],
  },
  {
    title: 'Long-Range Transformers for Dynamic Spatiotemporal Forecasting',
    authors: 'Jake Grigsby, <strong>Zhe Wang</strong>, Nam Nguyen, Yanjun Qi',
    venue: 'arXiv 2021',
    summary:
      'Spacetimeformer represents each variable at each timestep as a token, allowing long-range Transformers to learn spatial and temporal relationships jointly.',
    tags: ['Time series', 'Transformers'],
    art: 'SPACE\nTIME',
    tone: 'blue',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2109.12218' },
      { label: 'Code', href: 'https://github.com/QData/spacetimeformer', kind: 'secondary' },
    ],
  },
];
