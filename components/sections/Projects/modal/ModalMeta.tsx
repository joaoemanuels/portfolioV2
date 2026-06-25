import type { Project } from "@/types";

export function ModalMeta({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 text-sm">
      <div className="space-y-1.5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          👤 Meu Papel
        </h5>
        <p className="font-semibold text-white">Front-end Developer</p>
        <p className="text-xs text-zinc-400 leading-relaxed">{project.role}</p>
      </div>
      <div className="space-y-1.5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          ⏱️ Duração
        </h5>
        <p className="font-semibold text-white">{project.duration}</p>
      </div>
      <div className="space-y-1.5">
        <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          📈 Resultados
        </h5>
        <p className="font-semibold text-white">
          {project.results?.split(" ")[0] || "+40%"}
        </p>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {project.results}
        </p>
      </div>
    </div>
  );
}
