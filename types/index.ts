export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  extraImages?: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[];
  function?: string;
  role?: string;
  duration?: string;
  results?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
}
