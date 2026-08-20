export interface Achievement {
  title: string;
  icon: string;
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '100% Salary Increase',
    icon: '⬈',
    description: 'Achieved a 100% salary increase within one year within the same company, recognized for exceptional performance and value delivery.'
  },
  {
    title: 'Client Commendation',
    icon: '★',
    description: 'Commended by the client for outstanding performance and timely delivery on a high-priority project.'
  }
];
