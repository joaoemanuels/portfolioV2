"use client";

import React from "react";
import { Badge } from "../../ui/Badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-900">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
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
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            GitHub
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
