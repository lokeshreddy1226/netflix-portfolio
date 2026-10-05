export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface ContentCategory {
  id: string;
  title: string;
  projects: Project[];
}

export const myInfo = {
  name: "LOKESH REDDY GANGASANI",
  role: "Software Engineer",
  bio: "Software Engineer at Intuit building high-throughput distributed systems and LLM-powered developer tools — from financial data pipelines processing 50M+ daily transactions to RAG pipelines serving 200+ engineers.",
  location: "San Jose, CA",
  email: "lokeshreddy1226@gmail.com",
  github: "https://github.com/lokeshreddy1226",
};

export const featuredProject: Project = {
  id: "featured-1",
  title: "RAG-Based API Documentation Pipeline",
  description:
    "Ingests source code across 350+ internal microservices to auto-generate structured API and architecture docs, deployed as live context to an LLM-powered developer assistant serving 200+ engineers daily — cutting API integration time by 40% and LLM costs by 30%.",
  thumbnail:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
  category: "AI & Developer Productivity",
  technologies: ["Python", "RAG", "LLMs", "Kafka", "AWS"],
  github: "https://github.com/lokeshreddy1226",
};

export const contentRows: ContentCategory[] = [
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    projects: [
      {
        id: "ds-1",
        title: "Financial Data Ingestion Platform",
        description:
          "High-throughput data ingestion and processing on Intuit's Data Exchange (IDX) platform — the financial-data aggregation backbone for QuickBooks, TurboTax, and Credit Karma. Handles 50M+ daily transactions with a 99.95% uptime SLA.",
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Distributed Systems",
        technologies: ["Apache Kafka", "Java", "AWS", "Splunk"],
      },
      {
        id: "ds-2",
        title: "Async Ingestion with Kafka",
        description:
          "Re-architected synchronous bottlenecks into asynchronous Kafka-based ingestion — 8x throughput improvement, cutting latency from 5s to 200ms for high-volume financial data pipelines.",
        thumbnail:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Distributed Systems",
        technologies: ["Kafka", "Java", "Redis"],
      },
      {
        id: "ds-3",
        title: "Banking Payments Migration",
        description:
          "Owned end-to-end migration of high-volume banking payment flows (10M+ annual transactions) onto a consolidated core platform — zero-downtime cutover with full backward compatibility across legacy APIs.",
        thumbnail:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Distributed Systems",
        technologies: ["Java", "Spring Boot", "MySQL"],
      },
    ],
  },
  {
    id: "ai-productivity",
    title: "AI & Developer Productivity",
    projects: [
      {
        id: "ai-1",
        title: "RAG Documentation Pipeline",
        description:
          "Retrieval-augmented generation pipeline ingesting source code across 350+ microservices to auto-generate API and architecture docs, served as live context to an LLM developer assistant used by 200+ engineers daily.",
        thumbnail:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "AI & Developer Productivity",
        technologies: ["Python", "RAG", "LLMs", "NLP"],
      },
      {
        id: "ai-2",
        title: "Self-Serve Onboarding Portal",
        description:
          "Built a self-serve onboarding portal for financial data and account APIs, letting TurboTax, Credit Karma, and QuickBooks teams integrate without manual support — onboarding support time down 70%.",
        thumbnail:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "AI & Developer Productivity",
        technologies: ["React", "TypeScript", "Node.js"],
      },
      {
        id: "ai-3",
        title: "Distributed Tracing Tooling",
        description:
          "Built Splunk-based distributed tracing and log analysis tooling to diagnose production data-flow failures — reduced mean time to resolution for Data Xchange incidents by 60%.",
        thumbnail:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "AI & Developer Productivity",
        technologies: ["Splunk", "OpenTelemetry", "Python"],
      },
    ],
  },
  {
    id: "cloud-infra",
    title: "Cloud & Infrastructure",
    projects: [
      {
        id: "ci-1",
        title: "Microservices on AWS",
        description:
          "Deployed microservices on AWS with dynamic load balancing and autoscaling (EKS, EC2, ASG, ELB, RDS); Kubernetes cluster setup, pod deployment, and job management — 30% application performance improvement.",
        thumbnail:
          "https://images.unsplash.com/photo-1451187580459-43490279c429?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Cloud & Infrastructure",
        technologies: ["AWS", "Kubernetes", "Docker"],
      },
      {
        id: "ci-2",
        title: "Infrastructure as Code",
        description:
          "Automated AWS cloud infrastructure management with CloudFormation and Terraform; CI/CD with CodeBuild, CodeDeploy, and CodePipeline — deployment time down 40%.",
        thumbnail:
          "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Cloud & Infrastructure",
        technologies: ["Terraform", "CloudFormation", "Jenkins"],
      },
      {
        id: "ci-3",
        title: "Farmer Chatbot",
        description:
          "Intent-classification chatbot using LSTMs and ELMo serving real-time farming insights — supply prices and market trends via third-party APIs. Flask/Python backend integrated into a React Native mobile app.",
        thumbnail:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
        category: "Cloud & Infrastructure",
        technologies: ["Python", "Flask", "React Native", "NLP"],
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    techs: ["Java", "Python", "JavaScript", "SQL", "C++", "C", "Bash", "R"],
  },
  {
    category: "Backend & Distributed Systems",
    techs: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "gRPC",
      "Kafka",
      "RabbitMQ",
      "Redis",
      "Elasticsearch",
      "OAuth",
      "DynamoDB",
      "Cassandra",
      "MySQL",
    ],
  },
  {
    category: "AI & Developer Productivity",
    techs: ["RAG", "LLM Applications", "NLP", "Prompt Engineering"],
  },
  {
    category: "Cloud & Infrastructure",
    techs: ["AWS", "Docker", "Kubernetes", "Terraform", "CloudFormation", "ArgoCD", "Jenkins"],
  },
  {
    category: "Observability & Reliability",
    techs: [
      "Splunk",
      "Datadog",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "OpenTelemetry",
      "CloudWatch",
      "SRE",
    ],
  },
  {
    category: "Systems & Networking",
    techs: ["Linux", "TCP/IP", "DNS", "Load Balancing", "Wireshark"],
  },
  {
    category: "Tools",
    techs: ["IntelliJ IDEA", "VS Code", "Cursor", "Postman", "Jira", "Claude CLI"],
  },
];
