"use client";

import { useEffect, useRef, useState } from "react";
import { ModalHeader } from "./modal/ModalHeader";
import { ModalGallery } from "./modal/ModalGallery";
import { ModalMeta } from "./modal/ModalMeta";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [prevProject, setPrevProject] = useState<Project | null>(project);
  const [activeImage, setActiveImage] = useState(project?.image || "");

  if (project !== prevProject) {
    setPrevProject(project);
    setActiveImage(project?.image || "");
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
      className="backdrop:bg-black/80 backdrop:backdrop-blur-md bg-zinc-950 text-zinc-50 rounded-2xl border border-zinc-900 shadow-2xl max-w-5xl w-[92vw] h-[85vh] max-h-200 focus:outline-none fixed inset-0 m-auto overflow-hidden open:flex flex-col"
    >
      <button
        onClick={onClose}
        aria-label="Fechar modal"
        className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
      >
        ✕
      </button>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <ModalHeader project={project} />

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

          <div className="lg:col-span-7 flex flex-col space-y-4 sticky top-0">
            <ModalGallery
              project={project}
              activeImage={activeImage}
              onSelect={setActiveImage}
            />
          </div>
        </div>

        <ModalMeta project={project} />

        <div className="flex justify-center pt-4">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 active:scale-98 transition-all cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}
