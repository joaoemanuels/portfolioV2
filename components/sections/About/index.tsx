"use client";

import {
  BriefcaseBusiness,
  CircleCheckBig,
  FolderBookmark,
  MoveRight,
  Pin,
} from "lucide-react";

const stats = [
  {
    id: 1,
    value: "1+",
    label: "Anos de experiência",
    icon: <BriefcaseBusiness />,
  },
  {
    id: 2,
    value: "15+",
    label: "projetos completos",
    icon: <CircleCheckBig />,
  },
  {
    id: 3,
    value: "15+",
    label: "projetos completos",
    icon: <FolderBookmark />,
  },
  {
    id: 4,
    value: "100%",
    label: "Commitment",
    icon: <Pin />,
  },
];

export function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
      <div className="relative aspect-square w-full max-w-90 mx-auto bg-[#B4A5FF] rounded-2xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 flex items-end justify-center">
          <span className="text-sm text-purple-900/60 font-mono mb-4">
            [ Sua Foto Aqui ]
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-5">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Sobre mim
        </span>

        <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Clean code. Pixel perfect.
          <br />
          Boas experiências.
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
          Sou um desenvolvedor front-end apaixonado por transformar ideias em
          interfaces web bonitas, funcionais e responsivas. Adoro criar
          experiências de usuário fluidas utilizando tecnologias modernas e
          código limpo.
        </p>

        <a
          href="#contact"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98]"
        >
          Mais sobre mim
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <MoveRight />
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:col-span-2 lg:col-span-1">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center gap-4 p-5 rounded-2xl transition-colors duration-300 border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50/80 dark:bg-indigo-500/10 text-xl text-indigo-600 dark:text-indigo-400">
              {stat.icon}
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
