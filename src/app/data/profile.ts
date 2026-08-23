export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  placeholder: string;
}

export interface ProfileArea {
  title: string;
  description: string;
  exploring?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const PROFILE = {
  name: 'Kuldeep Singh Solanki',
  shortBrand: 'KSS',
  role: 'Software Developer',
  email: 'kuldeepsinghsolanki111@gmail.com',
  phone: '+91 8120683900',
  resumePath: '/assets/resume/Kuldeep-Singh-Solanki-Resume.pdf',
  status: 'Currently exploring → Generative AI Engineering',
  greeting: "Hi, I'm",
  heroTitle: 'Software Developer',
  heroTagline: 'Building enterprise applications & AI-powered solutions.',
  heroDescription:
    'I craft scalable web applications and enterprise platforms using Angular, Node.js and modern cloud technologies — and now expanding into Generative AI engineering.',
  heroStack: ['Angular', 'Node.js', 'TypeScript', 'Microservices', 'Gen AI'],
  professionalSummary:
    'A full-stack developer shaping reliable applications, integrations, and internal platforms across enterprise teams.',
  aboutParagraphs: [
    "I'm a software developer with 5+ years of experience building enterprise web applications and platforms. I've worked across the full stack — from Angular frontends to Node.js/Express backends — delivering business-critical applications for organizations ranging from startups to large enterprises.",
    "My work spans internal enterprise portals, third-party API integrations, cloud infrastructure and real-time application features. I'm currently deepening my expertise in Generative AI, building RAG-based applications and exploring LLM agent workflows using LangChain, LangGraph and MCP.",
  ],
  profileAreas: [
    {
      title: 'Full Stack Development',
      description:
        'Building polished Angular interfaces with scalable Node.js and Express.js backends.',
    },
    {
      title: 'Enterprise Applications',
      description:
        'Delivering internal portals, workflow systems, and business-critical platforms for teams and clients.',
    },
    {
      title: 'API & Cloud Integrations',
      description:
        'Connecting applications with JIRA APIs, Google APIs, Azure authentication, and cloud-native services.',
    },
    {
      title: 'DevOps & Monitoring',
      description:
        'Supporting delivery with CI/CD, Docker, Kubernetes, Kibana, AWS CloudWatch, and Dynatrace.',
    },
    {
      title: 'AI Engineering',
      description:
        'Exploring RAG-based applications, LangChain workflows, LangGraph orchestration, and MCP-enabled tooling.',
      exploring: true,
    },
  ] satisfies ProfileArea[],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/8061kuldeep/',
      icon: 'GH',
      placeholder: 'github.com/8061kuldeep',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kuldeep-solanki-4841ba13b/',
      icon: 'in',
      placeholder: 'linkedin.com/in/kuldeep-solanki-4841ba13b',
    },
  ] satisfies SocialLink[],
  footerLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] satisfies FooterLink[],
  contactIntro:
    'Open to conversations around enterprise platforms, full-stack product work, and emerging AI engineering opportunities.',
  contactMessage:
    "If you're hiring, collaborating, or discussing engineering ideas, feel free to reach out.",
  contactFormNote: 'Powered by EmailJS. Messages are sent directly to my inbox.',
  footerNote: 'Built with Angular',
} as const;
