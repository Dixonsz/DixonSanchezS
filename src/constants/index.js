export const NAV_LINKS = [
  { label: "nav.about", href: "#about" },
  { label: "nav.skills", href: "#skills" },
  { label: "nav.projects", href: "#projects" },
  { label: "nav.contact", href: "#contact" },
]

export const SOCIAL_LINKS = {
  github: "https://github.com/Dixonsz",
  linkedin: "https://www.linkedin.com/in/dixon-sanchez/",
  email: "Dixonsanchezsoza@gmail.com"
}

export const PERSONAL_INFO = {
  name: "Dixon Sánchez Soza",
  role: "Full Stack Developer Junior",
  location: "San José, Costa Rica",
  phone: "+506 8894-0261",
  email: "Dixonsanchezsoza@gmail.com",
  description: {
    short: "Full Stack Developer Junior passionate about building clean, scalable web applications with Python and React.",
    long: "Full Stack Developer Junior. Python (FastAPI/Django) & React. Experienced leading backend architectures based on Clean Architecture and Hexagonal Architecture. Proficient in professional workflows: documented APIs, testing with pytest/Postman and Scrum methodologies. Looking for my first professional opportunity in a Costa Rican startup to keep learning and contribute value to the team from day one.",
  },
  availability: true,
  cvUrl: "/cv/CV_Dixon_Sanchez_Soza_FullStack_Junior.pdf",
}

export const ABOUT_INFO = {
  description: "I'm a Full Stack Developer Junior specialized in Python and React, with experience leading backend architectures based on Clean Architecture and Hexagonal Architecture. I've applied my knowledge in Social Action (TCU) projects and university environments, working in teams to solve real needs with code.",
  passion: "I'm passionate about building well-structured, maintainable software. I enjoy designing clean APIs, applying solid architecture patterns and continuously improving my skills to deliver real value through code.",
  education: {
    degree: "Bachelor's in Business Informatics",
    institution: "Universidad de Costa Rica (UCR)",
    year: "In progress",
    relevant: "Software Engineering, Architecture & Infrastructure, Project Management, Systems Analysis & Design",
  },
  languages: [
    { lang: "Spanish", level: "Native" },
    { lang: "English", level: "Technical reading fluent, A2 conversational (actively improving)" },
  ],
 stats: [
  { label: "stats.years", value: "2+" },
  { label: "stats.projects", value: "2+" },
  { label: "stats.technologies", value: "15+" },
  { label: "stats.coffee", value: "∞" },
],
}

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "DevOps / Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
  },
  {
    category: "Testing / API",
    items: [
      { name: "pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: "Motors — Automotive Workshop",
    description: "Full stack system for automotive workshop management. Includes modules for scheduling, authentication, inventory, services, and vehicle registration. Deployed on Railway.",
    tech: ["Django", "MySQL", "Redis", "Cloudinary", "Docker", "Tailwind CSS"],
    github: "https://github.com/Dixonsz/motors.git",
    image: "https://res.cloudinary.com/dlbonrawd/image/upload/v1780107227/Screenshot_2026-05-29_190207_h2ttl5.png",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    title: "Zybus — Backend API",
    description: "REST API for a bus transport management system. Built with Hexagonal Architecture, DDD and CQRS on async FastAPI with JWT auth, Redis caching and automated testing with pytest.",
    tech: ["Python", "FastAPI", "MySQL", "Redis", "Docker", "pytest"],
    github: "https://github.com/FallasDev/Zybus-Backend.git",
    image: "https://res.cloudinary.com/dlbonrawd/image/upload/v1780107228/Screenshot_2026-05-29_191600_jhmfh7.png",
    color: "from-violet-50 to-violet-100",
  },
]

export const CONTACT_INFO = {
  email: "Dixonsanchezsoza@gmail.com",
  formEndpoint: "https://formspree.io/f/meedndok",
  cvUrl: "/cv/CV_Dixon_Sanchez_Soza_FullStack_Junior.pdf",
}