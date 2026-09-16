export const portfolioData = {
  personal: {
    name: "Nayan Prajapati",
    shortName: "Nayan",
    title: "Backend Developer (Laravel)",
    heroTitle: "PHP LARAVEL DEVELOPER.",
    tagline: "Backend Specialist & Laravel Developer",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 9104295056",
    rawPhone: "9104295056",
    email: "info.nayan1323@gmail.com",
    linkedin: "https://linkedin.com/in/nayan-web-developer",
    linkedinDisplay: "linkedin.com/in/nayan-web-developer",
    github: "https://github.com/NayanPrajapati1323",
    githubDisplay: "github.com/NayanPrajapati1323",
    portfolioUrl: "https://iamnayan.vercel.app",
    portfolioDisplay: "iamnayan.vercel.app",
    whatsappUrl: "https://wa.me/919104295056",
    avatar: "/profile.jpeg",
    bio: "Backend Developer with nearly 1 year of experience building scalable web applications using Laravel, PHP, MySQL, REST APIs, and Git. Experienced in developing secure APIs, implementing authentication systems, and integrating payment gateways for production applications. Skilled in optimizing database queries and delivering business features in live production environments. Passionate about backend architecture and continuously improving software engineering skills."
  },

  stats: [
    { label: "Experience", value: "1+", suffix: "Year" },
    { label: "Projects Built", value: "4+", suffix: "Core Projects" },
    { label: "B.Tech CGPA", value: "8.7", suffix: "Silver Oak Univ" },
    { label: "API Endpoints", value: "10+", suffix: "Production" }
  ],

  experiences: [
    {
      id: "tanish-info",
      role: "Backend Developer (Laravel)",
      company: "Tanish Info Services",
      location: "Ahmedabad, Gujarat, India",
      period: "July 2025 – Present",
      isCurrent: true,
      points: [
        "Build and maintain 10+ RESTful API endpoints in Laravel used across production applications",
        "Implement authentication and role-based authorization protecting 3+ core API endpoints",
        "Optimize MySQL queries, improving application response times by up to 20%",
        "Resolve 25+ production bugs and deliver 10+ new business features on schedule",
        "Collaborate with a cross-functional team of 3+ frontend and QA engineers to ship features end-to-end",
        "Contribute 30+ commits via Git in a collaborative, version-controlled development workflow"
      ],
      techStack: ["Laravel", "PHP", "MySQL", "REST APIs", "RBAC", "Git", "Postman"]
    }
  ],

  education: [
    {
      id: "silver-oak",
      degree: "B.Tech in Computer Engineering",
      institution: "Silver Oak University",
      score: "8.7 CGPA",
      year: "2024",
      description: "Comprehensive study of Computer Engineering, Data Structures, Relational Database Management Systems (RDBMS), Object-Oriented Programming, and Web Development."
    }
  ],

  projects: [
    {
      id: "wfm",
      slug: "workforce-management-system",
      title: "Workforce Management (WFM)",
      category: "Enterprise System",
      badge: "Laravel / PHP",
      shortDescription: "Engineered a meter management system with 10+ CRUD modules covering the full meter lifecycle.",
      description: "An enterprise-grade Workforce Management system engineered with 10+ CRUD modules to manage and track the full meter lifecycle, including Old Meter Devolution workflows, secure REST APIs, and database performance optimization.",
      highlights: [
        "Engineered a meter management system with 10+ CRUD modules covering the full meter lifecycle",
        "Designed the Old Meter Devolution workflow and optimized database relationships",
        "Developed REST APIs with role-based authentication and improved query performance"
      ],
      tags: ["Laravel", "PHP", "MySQL", "REST APIs", "RBAC", "Workflow Engine"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: "greenwood",
      slug: "greenwood-agriscience",
      title: "Greenwood Agriscience",
      category: "Agrochemical E-Commerce Platform",
      badge: "Laravel / BillDesk / Multi-Lang",
      shortDescription: "Fully dynamic e-commerce platform in Laravel for an agrochemical distribution business managing 20+ products.",
      description: "A comprehensive agrochemical e-commerce platform built in Laravel featuring multi-category browsing, wishlist, cart, dynamic order tracking, SMS/email notifications, BillDesk payment gateway with dynamic QR code payments, and 4-language support.",
      highlights: [
        "Created a fully dynamic e-commerce platform in Laravel for an agrochemical distribution business managing 20+ products",
        "Built multi-category product browsing with cart, wishlist, and order tracking",
        "Integrated email and SMS notifications for order and account events",
        "Integrated BillDesk payment gateway alongside dynamic QR code payment options",
        "Added multi-language support (English, Gujarati, Hindi, Marathi)"
      ],
      tags: ["Laravel", "PHP", "MySQL", "BillDesk Gateway", "Dynamic QR", "Multi-Language", "SMS & Email"],
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
      featured: true
    },
    {
      id: "csrdigi",
      slug: "csrdigi-dashboard",
      title: "CSRDIGI Dashboard",
      category: "Agri-Tech & QR System",
      badge: "Laravel / RBAC / QR",
      shortDescription: "Agricultural crop management dashboard and public QR code generation with role-based access control.",
      description: "Engineered a scalable web dashboard for agricultural crop data management and public dynamic QR code generation. Features a robust role-based access control (RBAC) architecture across 3 distinct user roles supporting up to 500 active users.",
      highlights: [
        "Created a dashboard for agricultural crop management and public QR code generation",
        "Designed role-based access control across 3 user roles, supporting up to 500 users",
        "Developed clean reporting views and optimized query performance for real-time data access"
      ],
      tags: ["Laravel", "PHP", "MySQL", "RBAC", "QR Code Generation", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      featured: true
    },
    {
      id: "white-mango",
      slug: "white-mango-skincare",
      title: "White Mango Skincare",
      category: "E-Commerce / Beauty & Wellness",
      badge: "Laravel / PayUMoney / Auth",
      shortDescription: "E-commerce platform with Google Auth, Email OTP login, and PayUMoney payment gateway integration.",
      description: "An elegant e-commerce web platform for skincare retail with Google OAuth and Email OTP authentication workflows, PayUMoney online payment gateway integration, and relational database schema design for high-traffic product handling.",
      highlights: [
        "Developed an e-commerce platform with Google Auth and Email OTP login",
        "Integrated PayUMoney payment gateway for secure online transactions",
        "Contributed to database management, designing table structures for key modules"
      ],
      tags: ["Laravel", "PHP", "MySQL", "Google Auth", "Email OTP", "PayUMoney Gateway"],
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop",
      featured: true
    }
  ],

  skills: {
    languages: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: "Expert" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Intermediate" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Advanced" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Advanced" }
    ],
    backend: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: "Expert" },
      { name: "REST APIs", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced" },
      { name: "Authentication (Auth)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", level: "Advanced" },
      { name: "Middleware & Validation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: "Advanced" },
      { name: "Payment Gateways (BillDesk, PayUMoney)", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", level: "Advanced" }
    ],
    database: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Advanced" },
      { name: "Query Optimization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Advanced" }
    ],
    versionControlAndTools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Advanced" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Advanced" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "Advanced" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced" }
    ],
    familiar: [
      { name: "Docker (Basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "Basics" },
      { name: "React (Basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Basics" }
    ]
  },

  orbitIcons: {
    outer: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#ffffff" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ed" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f05032" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb" }
    ],
    middle: [
      { name: "REST APIs", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#ff6c37" },
      { name: "BillDesk & Payments", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", color: "#635bff" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#ef5b25" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc" }
    ],
    inner: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "#ff2d20" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777bb4" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#00758f" }
    ]
  }
};
