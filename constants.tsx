import { Experience, Project, Publication, Award, TechStack, Education } from './types';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const ABOUT_TEXT = "I am an AI Research Engineer and Data Scientist specializing in Bayesian Optimization, Multi-Agent Systems, and Efficient LLM Architectures. My work bridges the gap between theoretical research and production-grade engineering, focusing on reducing computational overhead and automating complex reasoning in Generative AI systems.";

export const SOCIAL_LINKS = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    href: "mailto:antonio.sabbatella.project@gmail.com"
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/AntonioSabbatella"
  },
  {
    icon: <FileText className="w-4 h-4" />,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=2OhpFQsAAAAJ&hl=en"
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: "GitHub",
    href: "https://github.com/AntonioSabbatellaUni"
  }
];

export const CORE_PILLARS = [
  {
    title: "Bayesian Optimization",
    desc: "Automating prompt engineering and multi-agent team composition (MALBO, BOInG) using Multi-Objective strategies."
  },
  {
    title: "Multi-Agent Systems",
    desc: "Designing Pareto-efficient agentic workflows that balance performance and computational cost."
  },
  {
    title: "Efficient LLM Architectures",
    desc: "Reducing computational overhead via Sparse Attention, RAG optimization, and context compression."
  }
];

export const TECH_STACK: TechStack[] = [
  { category: "Core", skills: ["Python", "PyTorch", "CUDA"] },
  { category: "LLM & Agents", skills: ["HuggingFace", "LangChain", "BoTorch", "DeepSeek Arch"] },
  { category: "Infrastructure", skills: ["Docker", "GCP", "Git", "Linux"] }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master's Degree in Data Science",
    university: "University of Milano-Bicocca",
    location: "Milan, Italy",
    period: "2023 - Current",
    grade: "110 Cum Laude / 110 (GPA: 4.0/4.0)",
    thesis: "MALBO (Multi-Agent LLM Bayesian Optimization): Automating cost-effective LLM agent teams.",
    coursework: ["Deep Learning", "NLP", "Computer Vision", "Statistics"]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    university: "University of Milano-Bicocca",
    location: "Milan, Italy",
    period: "2020 - 2023",
    grade: "108 / 110 (GPA: 3.93/4.0)",
    thesis: "The evolution of embedding techniques in text classification.",
    coursework: ["Machine Learning", "Distributed Systems", "Databases"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Machine Learning Engineer",
    company: "Stealth Startup",
    location: "Berlin, Germany (Remote)",
    period: "Feb 2025 – Present",
    description: [
      "Developing high-performance classification models and scalable data pipelines for proprietary applications."
    ],
    tags: ["Machine Learning", "Classification", "Python", "Remote"]
  },
  {
    role: "Lecturer - AI for Finance",
    company: "Sole 24 Ore Business School",
    location: "Milan, Italy",
    period: "Nov 2024",
    description: [
      "Lecturer for the Master in AI & Finance program (1-month intensive).",
      "Curriculum: Time Series Forecasting (ARIMA/SARIMA, LSTM, Chronos), LLMs & Local Inference, Web Scraping, and ML/DL Fundamentals."
    ],
    tags: ["Teaching", "LLM", "Time Series", "Web Scraping"]
  },
  {
    role: "Data Science Intern",
    company: "KNIME",
    location: "Berlin, Germany",
    period: "Oct 2024 – Feb 2025",
    description: [
      "Engineered ML/DL workflows including autoencoders and ensemble methods.",
      "Designed a GenAI workflow integrating LLMs and Google Ads API for automated SEO, implementing Human-in-the-Loop review.",
      "Authored a book chapter on A/B testing and Marketing Mix Modeling."
    ],
    tags: ["GenAI", "SEO", "Deep Learning", "Marketing Science"]
  },
  {
    role: "Machine Learning Researcher",
    company: "University of Milan-Bicocca",
    location: "Milan, Italy",
    period: "Jul 2023 – Present",
    description: [
      "Pioneered a Bayesian optimization method for LLM prompt generation, outperforming SOTA while reducing optimization time by 30%.",
      "Developed BOInG framework, reducing GPU memory requirements by two orders of magnitude compared to methods like LAMBO.",
      "Engineered MALBO for multi-objective optimization of multi-agent LLM systems."
    ],
    tags: ["Bayesian Opt", "Research", "LLM", "Multi-Agent"]
  },
  {
    role: "Data Science Intern",
    company: "OAKS Cloud",
    location: "Milan, Italy",
    period: "Jan 2023 – Aug 2023",
    description: [
      "Architected a multi-document RAG system using LlamaIndex and pgvector.",
      "Engineered cross-lingual sentiment analysis models fine-tuning BERT/RoBERTa variants."
    ],
    tags: ["RAG", "NLP", "Vector DB", "Fine-tuning"]
  }
];

export const PROJECTS: Project[] = [
  /*
  {
    title: "LUDUS",
    subtitle: "DeepSeek Architecture Port (In Progress)",
    description: "Porting DeepSeek V3/R1 Multi-Head Latent Attention (MLA) and sparse indexing to Qwen architectures to reduce inference costs. Conducting performance and ablation studies for efficient execution on consumer hardware.",
    impact: "Aiming to democratize efficient attention mechanisms.",
    tags: ["Deep Learning", "CUDA", "PyTorch", "Optimization"],
    links: []
  },
  */
  {
    title: "MALBO",
    subtitle: "Multi-Agent LLM Bayesian Optimization",
    description: "A framework for identifying Pareto-efficient agent teams. It finds optimal trade-offs between Cost and Performance for agent teams using Multi-Objective Bayesian Optimization. Includes a custom fork of smolagents.",
    impact: "Achieved 65.8% cost reduction vs baselines while maintaining performance.",
    tags: ["Multi-Agent", "Bayesian Opt", "Python", "Research"],
    links: [
        { label: "Paper", url: "https://arxiv.org/abs/2511.11788", type: "paper" },
        { label: "Code", url: "https://github.com/AntonioSabbatellaUni", type: "github" }
    ]
  },
  {
    title: "StudyWithWisp",
    subtitle: "AI SaaS Startup",
    description: "Full-stack AI study platform built with scalable microservices. Features automated grading and spaced repetition. Conducted pilot market research and product validation.",
    impact: "Implemented Context Engineering for cost-effective long-context processing.",
    tags: ["Next.js", "Microservices", "Startup", "Context Eng"],
    links: [
       { label: "Website", url: "https://www.studywithwisp.me", type: "external" }
    ]
  },
  {
    title: "UiNav",
    subtitle: "Autonomous UI Agent",
    description: "Autonomous UI interaction system combining a fine-tuned YOLO model for UI element detection with LLMs for natural language-driven browser automation.",
    impact: "Bridged computer vision and agentic reasoning for robust web automation.",
    tags: ["Computer Vision", "YOLO", "LLM", "PyTorch"],
    links: [
      { label: "Code", url: "https://github.com/AntonioSabbatellaUni/uinav", type: "github" }
    ]
  },
  {
    title: "Context Engineering",
    subtitle: "Cost Optimization Framework",
    description: "Engineered context compression techniques to reduce token usage in RAG pipelines. Fine-tuned Gemma 1B and Qwen 0.6B models.",
    impact: "84% token reduction with 67+ Q&A accuracy, outperforming traditional NLP by 20%.",
    tags: ["Optimization", "Fine-tuning", "QLoRA", "Gemini"],
    links: []
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Prompt optimization in large language models",
    authors: "A. Sabbatella, A. Ponti, I. Giordani, A. Candelieri, F. Archetti",
    journal: "Mathematics 12 (6), 929",
    year: "2024",
    description: "Seminal work on Bayesian strategies for prompt engineering.",
    stats: ["50+ Citations", "High Impact"],
    link: "https://doi.org/10.3390/math12060929"
  },
  {
    title: "MALBO: Optimizing LLM-Based Multi-Agent Teams via Multi-Objective Bayesian Optimization",
    authors: "Antonio Sabbatella",
    journal: "arXiv preprint arXiv:2511.11788",
    year: "2025",
    description: "Framework for identifying Pareto-efficient agent teams.",
    link: "https://arxiv.org/abs/2511.11788"
  },
  {
    title: "Bayesian Optimization for Instruction Generation (BOInG)",
    authors: "A. Sabbatella, et al.",
    journal: "Applied Sciences 14 (24), 11865",
    year: "2024",
    description: "Reduces GPU memory requirements by two orders of magnitude.",
    link: "https://doi.org/10.3390/app142411865"
  },
  {
    title: "Bayesian Optimization Using Simulation-Based Multiple Information Sources",
    authors: "A. Sabbatella, et al.",
    journal: "Machine Learning and Knowledge Extraction 6 (4)",
    year: "2024",
    description: "Advanced combinatorial optimization using multi-source information fusion.",
    stats: ["8 Citations"]
  }
];

export const AWARDS: Award[] = [
  {
    title: "Winner of KNIME Challenge 2024",
    organization: "KNIME",
    year: "May 2024",
    description: "1st place out of 30+ teams. Engineered ensemble model combining DL (autoencoders) and traditional ML."
  },
  {
    title: "National Digital School Award",
    organization: "Italian Ministry of Education",
    year: "2019",
    description: "1st place out of 200 competitors for IoT device development."
  },
  {
    title: "International Mathematical Games Finalist",
    organization: "Milan, Italy",
    year: "Nov 2018",
    description: "Winner of provincial and regional competitions. Qualified for national finals in the International Mathematical Games Championships."
  }
];