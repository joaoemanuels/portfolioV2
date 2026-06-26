"use client";

import { Download, MoveRight } from "lucide-react";
import { HeroMockup } from "./HeroMockup";
import { HeroSocials } from "@/components/ui/SocialsSection";

export function Hero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
      <div className="flex flex-col items-start space-y-6 max-w-xl z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          FRONT-END DEVELOPER
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Desenvolvo soluções responsivas e interativas.{" "}
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Experiência Web.
          </span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
          Desenvolvedor front-end focado na criação de sites modernos,
          responsivos e fáceis de usar, utilizando{" "}
          <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
          <span className="text-blue-800 font-medium">TypeScript</span>,{" "}
          <span className="text-purple-400 font-medium">React.js</span> e{" "}
          <span className="text-violet-700 font-medium">Tailwind</span>.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]"
          >
            Ver Projetos
            <MoveRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              size={16}
            />
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900/50 text-zinc-200 font-medium text-sm transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.98]"
          >
            Download CV
            <Download className="h-4 w-4 text-zinc-400" />
          </a>
        </div>

        <div className="flex items-center gap-4 pt-8 border-t border-zinc-800/60 w-full">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Vamos nos conectar:
          </span>
          <HeroSocials />
        </div>
      </div>

      <HeroMockup />
    </div>
  );
}
