import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "taskly",
    title: "Taskly",
    subtitle: "Task Management App",
    description:
      "Productivity dashboard to manage tasks, projects and track progress.",
    longDescription:
      "O Taskly foi criado para ajudar equipes a organizarem tarefas, definirem prioridades e acompanharem o progresso de forma visual e eficiente. O projeto possui autenticação, quadros colaborativos, métricas de produtividade e design totalmente responsivo.",
    image: "/projects/taskly.jpg",
    extraImages: [
      "/projects/taskly-1.jpg",
      "/projects/taskly-2.jpg",
      "/projects/taskly-3.jpg",
      "/projects/taskly-4.jpg",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],
    liveUrl: "https://taskly.example.com",
    githubUrl: "https://github.com/example/taskly",
    features: [
      "Autenticação com JWT",
      "Criação e organização de tarefas em quadros",
      "Atribuição de responsáveis e prazos",
      "Dashboard com métricas e gráficos",
      "Modo escuro e claro",
      "Totalmente responsivo",
    ],
    role: "Responsável por toda a interface, componentes, integração com API e estado global da aplicação.",
    duration:
      "Desenvolvimento individual com foco em performance, usabilidade e design responsivo.",
    results:
      "Aumento percebido na eficiência da organização de tarefas durante testes com usuários.",
  },
];
