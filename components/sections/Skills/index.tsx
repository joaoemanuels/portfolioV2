"use client";

import { skillsData } from "@/data/skills";
import Image from "next/image";

export function Skills() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-start">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Skills & Tools
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 w-full">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:border-zinc-800/80 dark:bg-zinc-950"
          >
            <div className="relative w-12 h-12 flex items-center justify-center mb-4">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <span className="text-xs font-semibold tracking-tight text-zinc-800 dark:text-zinc-300 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
