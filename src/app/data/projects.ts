export interface Project {
  id: string;
  name: string;
  category: 'enterprise' | 'ai';
  shortDescription: string;
  problem: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoId?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'expense-portal',
    name: 'Expense Portal',
    category: 'enterprise',
    shortDescription: 'Enterprise expense management system with multi-level approval workflows.',
    problem: 'Organizations needed a streamlined system to manage employee expense claims with automated approval routing.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Azure SSO'],
    highlights: ['Multi-level approval workflow', 'Azure SSO authentication', 'Role-based access control', 'Dashboard analytics'],
    featured: true,
  },
  {
    id: 'ticketing-tool',
    name: 'Ticketing Tool',
    category: 'enterprise',
    shortDescription: 'Internal issue tracking system with deep JIRA integration.',
    problem: 'Teams needed an integrated ticketing solution that synchronized with existing JIRA workflows.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JIRA APIs', 'Azure SSO'],
    highlights: ['Real-time JIRA synchronization', 'Custom workflow management', 'Azure authentication', 'Notification system'],
    featured: true,
  },
  {
    id: 'review-arm',
    name: 'Review Arm',
    category: 'enterprise',
    shortDescription: 'Multi-platform review aggregation and management platform.',
    problem: 'Businesses needed a centralized platform to collect and respond to reviews across Google and Facebook.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Google Review APIs', 'Facebook Review APIs'],
    highlights: ['Multi-platform review aggregation', 'Google & Facebook API integration', 'Review response management', 'Analytics dashboard'],
    featured: true,
  },
  {
    id: 'gate-pass-portal',
    name: 'Gate Pass Portal',
    category: 'enterprise',
    shortDescription: 'Digital gate pass management for enterprise visitor and employee access control.',
    problem: 'Manual gate pass processes were inefficient and error-prone for large enterprise campuses.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Azure SSO'],
    highlights: ['Digital pass generation', 'QR code integration', 'Real-time access tracking', 'Admin dashboard'],
    featured: false,
  },
  {
    id: 'construction-management',
    name: 'Construction Management Tool',
    category: 'enterprise',
    shortDescription: 'Project and resource management platform for construction teams.',
    problem: 'Construction teams needed better visibility into project timelines, resources and task assignments.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'FullCalendar'],
    highlights: ['Project timeline management', 'Resource allocation', 'Calendar integration', 'Progress tracking'],
    featured: false,
  },
  {
    id: 'meal-app',
    name: 'MealApp',
    category: 'enterprise',
    shortDescription: 'Food ordering and meal planning application with real-time features.',
    problem: 'Users needed a convenient way to plan and order meals with real-time order tracking.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Twilio'],
    highlights: ['Real-time order tracking with Socket.io', 'SMS notifications via Twilio', 'Menu management', 'Order history'],
    featured: false,
  },
  {
    id: 'enterprise-ai-assistant',
    name: 'Enterprise AI Knowledge Assistant',
    category: 'ai',
    shortDescription: 'RAG-based AI assistant for enterprise document knowledge retrieval and intelligent Q&A.',
    problem: 'Enterprises struggle to extract insights from large document repositories. This project enables natural language querying over company knowledge bases.',
    technologies: ['Angular', 'FastAPI', 'Python', 'LangChain', 'LangGraph', 'RAG', 'Qdrant', 'MCP', 'LLMs'],
    highlights: [
      'PDF/document ingestion pipeline',
      'Document chunking and embedding generation',
      'Vector search with Qdrant',
      'RAG-based retrieval',
      'Advanced agent workflows with LangGraph',
      'Tool calling via MCP',
      'API-first architecture with FastAPI',
    ],
    githubUrl: undefined,
    videoId: undefined,
    featured: true,
  },
];
