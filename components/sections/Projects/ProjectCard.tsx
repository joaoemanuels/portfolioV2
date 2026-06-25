import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 items-start">
        <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          {project.title}{" "}
          <span className="text-zinc-400 font-normal">
            — {project.subtitle}
          </span>
        </h3>

        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-between w-full mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900/60 text-xs font-semibold">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            GitHub
            <FaGithub size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
