export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  isLearning?: boolean;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: 'Frontend', icon: '⬡', skills: ['Angular', 'TypeScript', 'JavaScript'] },
  { name: 'Backend', icon: '⚙', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Database', icon: '◈', skills: ['MongoDB'] },
  { name: 'Cloud & DevOps', icon: '☁', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
  { name: 'Integrations', icon: '⬡', skills: ['JIRA APIs', 'Google APIs', 'Azure SSO', 'Socket.io', 'Twilio'] },
  { name: 'Monitoring & Tools', icon: '◎', skills: ['Kibana', 'AWS CloudWatch', 'Dynatrace', 'Swagger', 'FFMPEG'] },
  { name: 'AI / GenAI', icon: '✦', skills: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'RAG', 'Vector Databases', 'MCP', 'LLM Applications'], isLearning: true },
];
