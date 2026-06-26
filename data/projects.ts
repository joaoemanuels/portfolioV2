import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "pbviagens",
    title: "Paulo Viagens",
    subtitle: "Gerenciamente de viagens e rastreio",
    description: "WebApp de gerenciamento de passageiros e de rastreamento.",
    longDescription:
      "Sistema desenvolvido pra motoristas e passageiros conseguirem fazer todo o gerenciamento de viagens, acompanhamento do motorista, consultar horários de rota, valores e facilitando a comunicação mais rápida e direta com o motorista",
    image: "/projects/pauloviagens.jpg",
    extraImages: [
      "/projects/pauloviagens.jpg",
      "/projects/pauloviagens_2.jpg",
      "/projects/pauloviagens_3.jpg",
      "/projects/taskly-4.jpg",
    ],
    tags: [
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "MapBox",
      "Figma",
      "Git",
      "Vite",
    ],
    liveUrl: "https://pauloviagens.com/",
    githubUrl: "https://github.com/joaoemanuels/PAB-viagens",
    features: [
      "Autenticação com JWT",
      "Integração com o Whatsapp",
      "Uso do MapBox para rastreamento em tempo real",
      "Visualização de passageiros e acompanhamento de rotas",
      "Modo escuro e claro",
      "Totalmente responsivo",
    ],
    function:"Desenvolvedor FullStack",
    role: "Responsável por toda a interface, componentes, integração com API, gerenciamento do banco de dados e estado global da aplicação.",
    duration: "4 Semanas",
    results:
      "Aumento percebido no uso dos passageiros para acompanhamento e cadastros.",
  },
];
