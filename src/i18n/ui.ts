export const languages = {
  pt: 'Português',
  en: 'English',
};

export const defaultLang = 'pt';

export const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.headline': 'Arquitetando CRMs SaaS Escaláveis e Engenharia Full-Stack.',
    'hero.subheadline': 'Engenheiro Full-Stack focado em backends robustos (Go/Java) e interfaces de alta performance (React/Next.js). Especialista em soluções SaaS e infraestrutura escalável.',
    'hero.cta.github': 'Ver GitHub',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.cv': 'Baixar CV',
    'about.title': 'Sobre Mim',
    'about.paragraph': 'Graduando em Ciência da Computação na UNIFOR, foco na construção de sistemas de alta performance. Atuo na intersecção entre backend robusto (Go/Java) e frontend dinâmico (React/Next.js/TanStack), entregando plataformas SaaS críticas e escaláveis.',
    'about.education': 'UNIFOR / Ciência da Computação',
    'about.engineer_title': 'ENGENHEIRO',
    'about.engineer_subtitle': 'Focado em sistemas SaaS escaláveis e arquiteturas de alta performance.',
    'skills.title': 'Habilidades Técnicas',
    'exp.title': 'Experiência Profissional',
    'open.title': 'Contribuições Open Source',
    'terminal.hint': 'Pressione {shortcut} ou clique para abrir o terminal',
    'terminal.toggle': 'Abrir Terminal',
    'footer.reference': 'Referências:',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.headline': 'Architecting Scalable SaaS CRMs & Full-Stack Engineering.',
    'hero.subheadline': 'Full-Stack Engineer focused on robust backends (Go/Java) and high-performance interfaces (React/Next.js). Specialist in SaaS solutions and scalable infrastructure.',
    'hero.cta.github': 'View GitHub',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.cv': 'Download CV',
    'about.title': 'About Me',
    'about.paragraph': 'Computer Science student at UNIFOR, I focus on building high-performance systems. I bridge the gap between robust backend architectures (Go/Java) and dynamic frontends (React/Next.js/TanStack) for mission-critical SaaS platforms.',
    'about.education': 'UNIFOR / Computer Science',
    'about.engineer_title': 'ENGINEER',
    'about.engineer_subtitle': 'Focused on scalable SaaS systems and high-performance architectures.',
    'skills.title': 'Technical Skills',
    'exp.title': 'Professional Experience',
    'open.title': 'Open Source Contributions',
    'terminal.hint': 'Press {shortcut} or click to open terminal',
    'terminal.toggle': 'Open Terminal',
    'footer.reference': 'References:',
  },
} as const;

export const skillsData = {
  en: [
    { name: "Frontend", items: ["React", "Next.js", "TanStack Start", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Golang", "Java (Spring Boot)", "Node.js", "REST APIs", "Microservices"] },
    { name: "Infra & Cloud", items: ["Docker", "GCP", "AWS (Certified)", "DigitalOcean VPS", "Git"] }
  ],
  pt: [
    { name: "Frontend", items: ["React", "Next.js", "TanStack Start", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Golang", "Java (Spring Boot)", "Node.js", "APIs REST", "Microsserviços"] },
    { name: "Infra & Cloud", items: ["Docker", "GCP", "AWS (Certificado)", "DigitalOcean VPS", "Git"] }
  ]
};

export const experienceData = {
  en: [
    {
      company: "ABM TI",
      title: "Lead Full-Stack Developer",
      period: "Jan 2026 — Present",
      shortDescription: "Leading engineering efforts in a software house, modernizing technical architecture.",
      responsibilities: [
        "Increased software delivery efficiency by 100% through the design of standardized architectural templates.",
        "Managed end-to-end SDLC, designing scalable backends with Java Spring Boot and dynamic interfaces with Next.js & TanStack Start.",
        "Architected secure server infrastructure on DigitalOcean VPS and optimized deploy pipelines for high availability.",
        "Mentored the development team on code quality best practices and system architecture streamlining."
      ]
    },
    {
      company: "Verboo",
      title: "Full-Stack Product Engineer",
      period: "May 2024 — Jan 2026",
      shortDescription: "SaaS/CRM product engineer focused on data engineering and B2B backend infrastructure.",
      responsibilities: [
        "Built and maintained REST APIs for lead routing and enrichment across 200+ clients.",
        "Integrated complex third-party tools including WhatsApp Business API and OpenAI.",
        "Optimized PostgreSQL and Redis performance for 1,000+ active instances and large data volumes.",
        "Managed cloud infrastructure and CI/CD pipelines using Git and Docker containers."
      ]
    },
    {
      company: "Luga Energy",
      title: "Full-Stack Developer",
      period: "Feb 2024 — Jul 2024",
      shortDescription: "Developing energy management platforms with a focus on load performance.",
      responsibilities: [
        "Led Full-Stack development of a solar energy platform using Next.js and TypeScript.",
        "Reduced dashboard load times by 40% through effective caching and query optimization strategies.",
        "Implemented secure client management features and telemetry data visualization for 500+ active users."
      ]
    }
  ],
  pt: [
    {
      company: "ABM TI",
      title: "Desenvolvedor Full-Stack Líder",
      period: "Janeiro 2026 — Presente",
      shortDescription: "Liderando esforços de engenharia em software house, modernizando a arquitetura técnica.",
      responsibilities: [
        "Aumentou a eficiência na entrega em 100% através da concepção de templates arquiteturais padronizados.",
        "Gerenciou o ciclo de vida completo (SDLC), projetando backends com Java Spring Boot e interfaces com Next.js & TanStack Start.",
        "Arquitetou infraestrutura segura em VPS da DigitalOcean e otimizou pipelines de deploy para alta disponibilidade.",
        "Mentoria técnica da equipe em qualidade de código, arquitetura de sistemas e simplificação de fluxos."
      ]
    },
    {
      company: "Verboo",
      title: "Engenheiro de Produto Full-Stack",
      period: "Maio 2024 — Janeiro 2026",
      shortDescription: "Engenheiro de produto SaaS/CRM com foco em engenharia de dados e infraestrutura B2B.",
      responsibilities: [
        "Construção e manutenção de APIs REST para roteamento e enriquecimento de leads para 200+ clientes.",
        "Integrações complexas com ferramentas de terceiros (WhatsApp Business API e OpenAI).",
        "Otimizou performance de PostgreSQL e Redis para mais de 1.000 instâncias ativas e grandes volumes de dados.",
        "Gestão de infraestrutura cloud e pipelines de CI/CD utilizando Git e Docker."
      ]
    },
    {
      company: "Luga Energy",
      title: "Desenvolvedor Full-Stack",
      period: "Fevereiro 2024 — Julho 2024",
      shortDescription: "Desenvolvimento de plataforma de gestão de energia com foco em performance de carregamento.",
      responsibilities: [
        "Liderou o desenvolvimento Full-Stack de plataforma de energia solar usando Next.js e TypeScript.",
        "Reduziu o tempo de carregamento em 40% através de estratégias de cache e otimização de queries.",
        "Implementou recursos de gestão de clientes e visualização de dados de telemetria para 500+ usuários ativos."
      ]
    }
  ]
};
