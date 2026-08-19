export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  projects: string[];
  technologies: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Software Developer',
    period: '07/2025 – Present',
    current: true,
    description: 'Working on enterprise banking applications, focusing on API modernization and observability.',
    projects: ['BMO Project', 'MA Migration'],
    technologies: ['Legacy API Migration', 'Kibana', 'AWS CloudWatch', 'Dynatrace', 'Monitoring & Observability'],
  },
  {
    company: 'NeoSOFT Technologies',
    role: 'Senior Software Developer',
    period: '07/2023 – 05/2025',
    current: false,
    description: 'Led frontend and full-stack development of multiple enterprise internal portals.',
    projects: ['Expense Portal', 'Ticketing Tool', 'Gate Pass Portal', 'Employee Safety Portal', 'Combid Portal'],
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JIRA APIs', 'Azure SSO'],
  },
  {
    company: 'smartData Enterprises',
    role: 'Software Developer',
    period: '03/2022 – 07/2023',
    current: false,
    description: 'Developed client-facing web applications across diverse domains including food tech, community platforms, and healthcare.',
    projects: ['MealApp', 'Liaise Community Platform', 'Review Arm', 'Construction Management Tool', 'Healthcare POC (Epic/Cerner)'],
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Google APIs', 'Facebook Review APIs', 'Google Translation APIs'],
  },
  {
    company: 'smartData Enterprises',
    role: 'Associate Developer',
    period: '06/2021 – 03/2022',
    current: false,
    description: 'Started professional career building web applications, gaining experience across frontend and backend development.',
    projects: ['Student Course Management System', 'Customer Support Portal', 'FitForEverybody'],
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
  },
];
