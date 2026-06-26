import type { Project } from "@/types";
import { FaChartLine, FaUser } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

export function ModalMeta({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 text-sm">
      <div className="space-y-1.5">
        <h5 className="flex gap-2 text-xs font-bold uppercase items-center tracking-wider text-zinc-500 pb-2">
          <FaUser className="text-blue-900" size={20} /> Meu Papel
        </h5>
        <p className="font-semibold text-white">{project.function}</p>
        <p className="text-xs text-zinc-400 leading-relaxed">{project.role}</p>
      </div>
      <div className="space-y-1.5">
        <h5 className="flex gap-2 text-xs font-bold uppercase items-center tracking-wider text-zinc-500 pb-2">
          <LuAlarmClock className="text-blue-900" size={20} /> Duração
        </h5>
        <p className="font-semibold text-white">Rápido e Eficiente</p>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {project.duration}
        </p>
      </div>
      <div className="space-y-1.5">
        <h5 className=" flex gap-2 text-xs font-bold uppercase items-center tracking-wider text-zinc-500 pb-2">
          <FaChartLine className="text-blue-900" size={20} /> Resultados
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
