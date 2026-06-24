"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "../../ui/Badge";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Guardamos o ID do projeto que está sendo exibido para saber se ele mudou
  const [prevProjectId, setPrevProjectId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState("");

  if (project && project.id !== prevProjectId) {
    setPrevProjectId(project.id);
    setActiveImage(project.image);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="backdrop:bg-black/80 backdrop:backdrop-blur-md bg-zinc-950 text-zinc-50 rounded-2xl border border-zinc-900 shadow-2xl max-w-5xl w-[92vw] h-[85vh] max-h-[800px] focus:outline-none fixed inset-0 m-auto overflow-hidden open:flex flex-col"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Fechar modal"
      >
        ✕
      </button>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 scrollbar-thin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              ⭐ Projeto em destaque
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {project.title}{" "}
                <span className="text-zinc-500 font-normal">
                  — {project.subtitle}
                </span>
              </h3>
            </div>

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

            {project.longDescription && (
              <div className="space-y-2 pt-4 border-t border-zinc-900 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Sobre o projeto
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}

            {project.features && (
              <div className="space-y-3 pt-4 border-t border-zinc-900 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Principais Funcionalidades
                </h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-500 shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-4 w-full sticky top-0">
            <div className="relative aspect-[16/10] w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-inner">
              <img
                src={activeImage || project.image}
                alt="Project active view"
                className="w-full h-full object-cover object-top transition-all"
              />
            </div>

            {project.extraImages && (
              <div className="grid grid-cols-4 gap-2">
                {project.extraImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      activeImage === img
                        ? "border-purple-500 scale-[0.98]"
                        : "border-zinc-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 text-sm">
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              👤 Meu Papel
            </h5>
            <p className="font-semibold text-white">Front-end Developer</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {project.role}
            </p>
          </div>
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              ⏱️ Duração
            </h5>
            <p className="font-semibold text-white">3 semanas</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {project.duration}
            </p>
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

        <div className="flex justify-center pt-4">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm transition-all hover:bg-indigo-500 active:scale-98 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}
