export const profile = {
  name: 'Zhe Wang',
  role: 'Applied Scientist II at Amazon',
  intro:
    'I work on LLM post-training and model customization, reinforcement learning, AI safety, and multimodal model evaluation.',
  email: 'zw6sg@virginia.edu',
  linkedin: 'https://www.linkedin.com/in/zhe-wang-119639170/',
  scholar: 'https://scholar.google.com/citations?user=fqNkQjgAAAAJ&hl=en',
  profileImage: null as string | null,
};

export const news = [
  {
    date: '2026',
    text: 'Co-organized the KDD 2026 hands-on tutorial on multi-turn reinforcement learning for large language models.',
  },
  {
    date: '2025',
    text: 'Published Augmented Adversarial Trigger Learning at Findings of NAACL 2025.',
    href: 'https://aclanthology.org/2025.findings-naacl.394/',
  },
  {
    date: '2025',
    text: 'Published Hierarchical Prompt Decision Transformer at The Web Conference 2025.',
    href: 'https://arxiv.org/abs/2412.00979',
  },
  {
    date: 'Jun 2024',
    text: 'Joined Amazon as an Applied Scientist II.',
  },
];

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
    title: 'Augmented Adversarial Trigger Learning',
    authors: '<strong>Zhe Wang</strong>, Yanjun Qi',
    venue: 'Findings of NAACL 2025',
    summary:
      'ATLA augments adversarial-trigger objectives to learn more transferable jailbreak suffixes and extract hidden system prompts with substantially fewer queries.',
    tags: ['LLM safety', 'Adversarial ML'],
    art: 'ATLA',
    tone: 'charcoal',
    // image: '/images/publications/atla.webp',
    imageAlt: 'Overview figure from Augmented Adversarial Trigger Learning',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2025.findings-naacl.394/' },
      { label: 'PDF', href: 'https://aclanthology.org/2025.findings-naacl.394.pdf', kind: 'secondary' },
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
    // image: '/images/publications/hpdt.webp',
    imageAlt: 'Overview figure from Hierarchical Prompt Decision Transformer',
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/abs/10.1145/3701716.3715233' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2412.00979', kind: 'secondary' },
    ],
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
    // image: '/images/publications/pgrad.webp',
    imageAlt: 'Overview figure from PGrad',
    links: [
      { label: 'Paper', href: 'https://openreview.net/forum?id=CgCmwcfgEdH' },
      { label: 'Code', href: 'https://github.com/QData/PGrad', kind: 'secondary' },
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
    // image: '/images/publications/st-maml.webp',
    imageAlt: 'Overview figure from ST-MAML',
    links: [
      { label: 'Paper', href: 'https://proceedings.mlr.press/v180/wang22c.html' },
      { label: 'PDF', href: 'https://proceedings.mlr.press/v180/wang22c/wang22c.pdf', kind: 'secondary' },
    ],
  },
];
