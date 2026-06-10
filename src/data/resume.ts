export type ResumeProject = {
  title: string;
  description: string | string[];
  tech: string[];
  website?: string;
  demo?: string;
  repo?: string;
};

export type ResumeCompany = {
  company: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
};

export const hero = {
  badge: "Developer portfolio",
  title: "Hi, I’m Zelika. I build fast, polished React experiences.",
  description:
    "I design and ship modern web apps with React, Next.js, and Tailwind CSS. This portfolio highlights clean projects, responsive design, and production-ready performance.",
  primaryStack: "React + Next.js + Tailwind",
};

export const about =
  "I build polished, high-performance frontend experiences for product-focused teams. My work emphasizes responsive design, fast load times, and clean component architecture.";

export const projects: ResumeProject[] = [
  {
    title: "Tax Guardian",
    description: [
      "Overhauled design and user experience for a tax compliance product, resulting in a 25% increase in user retention.",
      "Built a dynamic dashboard with real-time data visualization using user specific IRS data.",
      "Audited and resolved key product issues, reducing bug reports by 90%.",
    ],
    tech: ["React", "TypeScript", "MUI", "Vite"],
    website: "https://app.taxguardian.com/",
  },
  {
    title: "Innovation Exchange",
    description: [
      "Built React + Typescript 14 reusable components for CMS, ensuring scalability and reduction is feature development time by 25%.",
      "Retained 3 clients and secured $200k in new contracts through the delivery of customized product features and stabilization of the development environment.",
      "Led development collaborative sessions for API integration, improving data flow within the application.",
      "Used AI-tools to solve inconsistencies in codebase and reduced backlog by 80%.",
    ],
    tech: ["React", "TypeScript", "nodeJS", "Tailwind"],
    website: "https://www.theinnovation.exchange/",
  },
  {
    title: "ICapital",
    description: [
      "Delivered a responsive web app for a financial services client, improving user engagement and retention.",
      "Implemented a design system to ensure consistency across the application and reduce development time.",
      "Optimized performance, reducing load times by 30% and improving user engagement.",
    ],
    tech: ["React", "TypeScript", "tailwind"],
  },
  {
    title: "Source Advisors",
    description: [
      "Designed a secure multilayer, role-based authorization system to protect sensitive client tax and personal data.",
      "Used Elixir to automate data collection and ingestion pipelines, stored in PostgreSQL for analysis of R&D tax calculations.",
      "Built over 100 custom Phoenix LiveView reusable components that support readability and scalability.",
      "Mentored 5 junior developers, providing guidance on best practices to bring end-to-end solutions from requirements to deployment.",
    ],
    tech: ["Elixir", "Phoenix", "Tailwind", "PostgreSQL"],
    website: "https://app.goat.tax/users/register",
  },
  {
    title: "Pineapple Payments",
    description: [
      "Managed file transfers, by uploading exported and imported files to S3, ensuring data reliability across environments",
      "Collaborated directly with non-technical stakeholders to reconcile multiple conflicting sources of truth and translate business requirements into technical solutions.",
      "Streamlined commission calculation logic and automated monthly exports to business intelligence software, replacing manual spreadsheet processes.",
      "Built a financial operations web application from the ground up, including authentication, business unit configuration, and data ingestion pipelines",
    ],
    tech: ["Elixir", "Phoenix", "Docker", "AWS", "PostgreSQL"],
  },
];

export const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "javaScript (ES6+)",
  "Node.js",
  "Vite",
  "PostgreSQL",
  "Elixir",
  "Python",
  "Kubernetes",
  "Docker",
  "Responsive UI",
  "API Integration",
  "Frontend Architecture",
  "AI-assisted Development (LLM)",
  "Debugging and Performance Optimization",
  "Product Thinking",
  "CMS (Content Management Systems)",
];

export const companies: ResumeCompany[] = [
  {
    company: "ZeePurpose Technical Solutions",
    role: "Software Engineering consultant",
    dates: "2025 — Present",
    description: "Leading web interfaces for growth-stage products.",
    highlights: [
      "Delivered a responsive web-app used by 50k+ monthly visitors.",
      "Implemented a design system improving development speed and consistency.",
      "Optimized performance, reducing load times by 30% and improving user engagement.",
      "Mentored engineers on design system and best practices.",
      "Build reusable components to accelerate delivery and improve code quality.",
      "Implemented AI-assisted workflows with LLMs to increase development speed by 50%.",
    ],
  },
  {
    company: "MojoTech",
    role: "Full-Stack Software Engineer",
    dates: "2019 — 2025",
    description:
      "Built web apps for enterprise and startup clients using React, Elixir, Typescript and Node across finance, medical and e-commerce industries.",
    highlights: [
      "Worked with large-scale systems with complex flows and high data volume and performance constraints.",
      "Contributed to team code reviews and test strategies improving code quality and maintainability.",
      "Led onboarding efforts, fostering mentorship, and promoting positive team culture.",
      "Collaborated with product managers and designers to deliver user-centric solutions that met business goals.",
    ],
  },
];
