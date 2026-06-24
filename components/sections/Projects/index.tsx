"use client";

import React, { useState } from "react";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Projetos em Destaque
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Alguns dos meus trabalhos recentes
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
