export interface LearningContent {
  mastered: string[];
  exploring: string[];
}

export const LEARNING_CONTENT: LearningContent = {
  mastered: ['JavaScript', 'Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Microservices', 'Docker', 'Kubernetes'],
  exploring: ['Generative AI', 'RAG', 'LangChain', 'LangGraph', 'MCP', 'FastAPI', 'LLM Applications']
};
