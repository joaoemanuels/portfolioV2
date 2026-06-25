import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ModalHeader({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
        ⭐ Projeto em destaque
      </div>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
        {project.title}{" "}
        <span className="text-zinc-500 font-normal">— {project.subtitle}</span>
      </h3>

      <p className="text-sm text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 pt-2 text-sm font-semibold">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Ver projeto ao vivo ↗
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          Ver código no GitHub 💻
        </a>
      </div>
    </>
  );
}
