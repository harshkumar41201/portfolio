import type {
  MetricItem,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  ContactInfo,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Harsh Kumar',
  role: 'Full Stack Developer',
  location: 'PUNJAB / REMOTE',
  tagline: 'Building Scalable, Refined, and Unbound Web Systems.',
  bio: 'Full Stack Developer with 2+ years of professional experience building production-grade web applications using React.js, Laravel, Node.js, and MongoDB. Specialized in high-performance APIs, JWT authentication, RBAC, database query optimization, Docker containerization, and AWS cloud deployment.',
  status: 'AVAILABLE FOR ROLES & CONTRACTS',
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'exp',
    value: '2+ Years',
    label: 'Professional Experience',
    description: 'React.js, Laravel, Node.js, and MongoDB',
  },
  {
    id: 'sites',
    value: '8+ Sites',
    label: 'Production Web Platforms',
    description: '90+ Google PageSpeed performance scores',
  },
  {
    id: 'api-perf',
    value: '~35%',
    label: 'API Speedup Achieved',
    description: 'Optimized response latency via indexing & queries',
  },
  {
    id: 'mentorship',
    value: '100+ Students',
    label: 'Mentored Globally',
    description: '200+ 1-on-1 live coding sessions with a 5/5 rating',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'ids-infotech',
    role: 'Full Stack Developer',
    company: 'IDS Infotech',
    period: 'Oct 2024 – Present',
    type: 'Full-Time',
    description: 'Engineering production enterprise applications and scalable backend systems using Laravel and React.js.',
    achievements: [
      'Developed responsive administrative dashboards, RESTful APIs, and comprehensive user management modules.',
      'Architected secure JWT authentication and granular Role-Based Access Control (RBAC).',
      'Improved API performance and response times by approximately 35% through query optimization and database indexing.',
      'Contributed to Docker-based containerization and automated CI/CD deployment pipelines.',
    ],
    skills: ['Laravel', 'React.js', 'REST APIs', 'JWT', 'RBAC', 'MySQL', 'Docker', 'CI/CD'],
  },
  {
    id: 'codeyoung',
    role: 'Web Development Instructor',
    company: 'Codeyoung',
    period: 'May 2024 – Oct 2024',
    type: 'Instructor',
    description: 'Mentored international students in software engineering fundamentals, interactive frontend frameworks, and API integration.',
    achievements: [
      'Mentored 100+ international students in web development architecture and modern frameworks.',
      'Conducted 200+ live 1-on-1 coding sessions, debugging sessions, and practical project builds.',
      'Taught React.js, modern JavaScript (ES6+), Bootstrap, and third-party REST API integrations.',
      'Maintained a spotless 5/5 average session rating across all student evaluations.',
    ],
    skills: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'REST APIs', 'Technical Mentorship'],
  },
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'Global Clients',
    period: 'Feb 2023 – Apr 2024',
    type: 'Freelance',
    description: 'Delivered bespoke, high-performance web applications and portals for diverse business clients.',
    achievements: [
      'Delivered 8+ production websites with clean architecture and responsive design.',
      'Achieved 90+ Google PageSpeed scores across projects via frontend optimization, asset compression, and efficient bundling.',
      'Integrated payment gateways (Stripe), CRM systems, and OAuth social login APIs.',
      'Implemented custom solutions using React.js, WordPress, and Laravel.',
    ],
    skills: ['React.js', 'Laravel', 'WordPress', 'Payment Gateways', 'CRMs', 'Performance Optimization'],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  institution: 'Chandigarh Group of Colleges, Jhanjeri',
  period: '2020 – 2024',
  grade: 'CGPA: 7.85 / 10',
  highlights: [
    'Object-Oriented Programming (OOP) & Design Patterns',
    'Database Management Systems (RDBMS & NoSQL)',
    'Data Structures & Algorithms',
    'Web Technologies & Cloud Computing',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Building fast, responsive, accessible, and reactive user interfaces',
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Ajax', 'jQuery'],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Scalable service architectures, business logic, and secure authentication',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'MVC', 'OOP'],
  },
  {
    id: 'database',
    name: 'Databases',
    description: 'Schema modeling, complex querying, and indexing optimization',
    skills: ['MySQL', 'SQL', 'MongoDB', 'Mongoose'],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Containerization, cloud infrastructure, and CI/CD workflows',
    skills: ['Docker', 'AWS EC2', 'AWS S3', 'Git', 'GitHub', 'CI/CD Pipelines'],
  },
  {
    id: 'tools',
    name: 'Tools & Workflow',
    description: 'Modern development environment and collaboration methodologies',
    skills: ['Postman', 'VS Code', 'Figma', 'WordPress', 'Agile / Scrum'],
  },
  {
    id: 'learning',
    name: 'Active Expansion & AI',
    description: 'Current continuous learning and modern technology focus',
    skills: ['Next.js', 'TypeScript Advanced', 'MERN Stack', 'AI Integration', 'Generative AI Workflows'],
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'harshkumar41201@gmail.com',
  linkedin: 'https://linkedin.com/in/harsh-kumar04',
  github: 'https://github.com/harshkumar001',
  status: 'AVAILABLE FOR OPPORTUNITIES',
};
