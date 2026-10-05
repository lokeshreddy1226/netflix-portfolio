
export const profiles = [
  {
    id: 1,
    type: "Recruiter",
    avatar: "./lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg",
    contentFilter: ["workExperience", "skills", "certifications", "projects"],
    continueWatching: [
      { title: "Work Permit", image: "./lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg" },
      { title: "Skills", image: "./lovable-uploads/c475c34c-8f67-467b-a5d4-f5421e323810.jpg" },
      { title: "Experience", image: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg" },
      { title: "Certifications", image: "./lovable-uploads/825adb96-f01f-42ec-8650-1bbaebffd433.jpg" },
      { title: "Recommendations", image: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg" },
    ],
    skills: [
      {
        category: "Languages",
        techs: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
      },
      {
        category: "Backend & Distributed Systems",
        techs: ["Spring Boot", "Kafka", "REST APIs", "Redis", "MySQL"]
      },
      {
        category: "Cloud & DevOps",
        techs: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
      }
    ]
  },
  {
    id: 2,
    type: "Developer",
    avatar: "./lovable-uploads/c475c34c-8f67-467b-a5d4-f5421e323810.jpg",
    contentFilter: ["projects", "technicalSkills", "openSource", "blog"],
    continueWatching: [
      { title: "Open Source", image: "./lovable-uploads/c475c34c-8f67-467b-a5d4-f5421e323810.jpg" },
      { title: "Technical Articles", image: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg" },
      { title: "GitHub", image: "./lovable-uploads/825adb96-f01f-42ec-8650-1bbaebffd433.jpg" },
      { title: "Portfolio", image: "./lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg" },
    ],
    skills: [
      {
        category: "Languages",
        techs: ["Java", "Python", "JavaScript", "SQL", "Bash"]
      },
      {
        category: "Distributed Systems",
        techs: ["Kafka", "gRPC", "RabbitMQ", "Redis", "Elasticsearch"]
      },
      {
        category: "AI & Productivity",
        techs: ["RAG", "LLM Applications", "NLP", "Prompt Engineering"]
      },
      {
        category: "Observability",
        techs: ["Splunk", "Datadog", "Prometheus", "Grafana", "OpenTelemetry"]
      }
    ]
  },
  {
    id: 3,
    type: "Stalker",
    avatar: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg",
    contentFilter: ["personalProjects", "aboutMe", "contactInfo", "social"],
    continueWatching: [
      { title: "Music", image: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg" },
      { title: "Reading", image: "./lovable-uploads/c475c34c-8f67-467b-a5d4-f5421e323810.jpg" },
      { title: "Blogs", image: "./lovable-uploads/825adb96-f01f-42ec-8650-1bbaebffd433.jpg" },
      { title: "Contact Me", image: "./lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg" },
    ],
    skills: [
      {
        category: "Education",
        techs: ["M.S. Software Engineering — San Jose State University", "B.Tech, Computer Science — VNR VJIET"]
      },
      {
        category: "Career So Far",
        techs: ["Software Engineer @ Intuit", "Software Engineer @ AT&T", "Systems Engineer @ TCS"]
      },
      {
        category: "Based In",
        techs: ["San Jose, California"]
      }
    ]
  },
  {
    id: 4,
    type: "Adventurer",
    avatar: "./lovable-uploads/825adb96-f01f-42ec-8650-1bbaebffd433.jpg",
    contentFilter: ["allProjects", "blog", "creative", "experimental"],
    continueWatching: [
      { title: "Coding Adventures", image: "./lovable-uploads/825adb96-f01f-42ec-8650-1bbaebffd433.jpg" },
      { title: "Side Projects", image: "./lovable-uploads/1f10192c-5884-49ba-b201-08f2144721b6.jpg" },
      { title: "Creative Coding", image: "./lovable-uploads/c475c34c-8f67-467b-a5d4-f5421e323810.jpg" },
      { title: "Hackathons", image: "./lovable-uploads/27c510dc-dc9f-4470-a7b9-34279eb80bca.jpeg" },
    ],
    skills: [
      {
        category: "Bold Moves",
        techs: ["8x throughput via async Kafka ingestion", "Zero-downtime migration of 10M+ annual transactions", "RAG pipeline across 350+ microservices"]
      },
      {
        category: "Off the Keyboard",
        techs: ["Zoos", "Weekend getaways", "Frontier GoWild pass"]
      }
    ]
  }
];
