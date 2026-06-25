"use client";

import { Download, MoveRight } from "lucide-react";
import { BsTypescript } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const socials = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/seuuser",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://linkedin.com/in/seuuser",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter size={16} />,
    href: "https://twitter.com/seuuser",
    label: "Twitter",
  },
  { icon: <MdEmail size={16} />, href: "mailto:seu@email.com", label: "Email" },
];

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
          <span className="text-indigo-400 font-medium">TypeScript</span>,{" "}
          <span className="text-indigo-400 font-medium">JavaScript</span>,{" "}
          <span className="text-purple-400 font-medium">React.js</span> and{" "}
          <span className="text-purple-400 font-medium">Tailwind</span> and{" "}
          <span className="text-zinc-200 font-medium">Figma</span>.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]"
          >
            Ver Projetos
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <MoveRight />
            </span>
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
          <div className="flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white hover:bg-zinc-800"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center lg:justify-end w-full min-h-100 select-none perspective-distant">
        <div className="relative w-full max-w-112.5 aspect-4/3 transform-[rotateX(15deg)_rotateY(-25deg)_rotateZ(5deg)] transform-3d hover:transform-[rotateX(10deg)_rotateY(-15deg)_rotateZ(2deg)] transition-transform duration-700 ease-out">
          <div className="absolute top-0 left-0 w-[85%] aspect-16/10 bg-zinc-950 rounded-xl border border-zinc-800/80 shadow-2xl overflow-hidden [translateZ(-40px)] opacity-60 backdrop-blur-sm">
            <div className="h-6 w-full bg-zinc-900 border-b border-zinc-800/50 flex items-center px-3 gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
            </div>
            <div className="p-4 font-mono text-[10px] text-zinc-500 space-y-1">
              <p className="text-indigo-400">const portfolio = {"{"}</p>
              <p className="pl-4">name: João Emanuel,</p>
              <p className="pl-4 text-purple-400">role: Front-end Developer,</p>
              <p className="pl-4">tech: [Next, react, TS, Tailwind]</p>
              <p className="text-indigo-400">{"};"}</p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[90%] aspect-16/10 bg-zinc-900 rounded-xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden transform-[translateZ(30px)]">
            <div className="h-6 w-full bg-zinc-950/80 border-b border-white/5 flex items-center px-3 justify-between">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[9px] text-zinc-500 font-mono">
                studio-preview.dev
              </span>
              <div className="w-4" />
            </div>
            <div className="p-4 bg-black h-full text-white flex flex-col justify-center items-center text-center space-y-2">
              <h3 className="text-sm font-bold tracking-tight">
                Estúdio Digital Criativo
              </h3>
              <p className="text-[8px] text-zinc-400 max-w-37.5">
                Desenvolvemos ativos digitais premium e interfaces web
                personalizadas.
              </p>
              <div className="h-3 w-12 rounded bg-indigo-600 text-[6px] flex items-center justify-center font-medium">
                Live Demo
              </div>
            </div>
          </div>

          <div className="absolute -top-6 left-1/3 h-10 w-10 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-lg transform-[translateZ(80px)] animate-bounce [animation-duration:4s]">
            <span className="text-sm text-cyan-400">
              <RiTailwindCssFill />
            </span>
          </div>

          <div className="absolute top-1/3 -right-6 h-10 w-10 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-lg transform-[translateZ(60px)] animate-bounce [animation-duration:3.5s]">
            <span className="text-sm text-cyan-400 animate-spin [animation-duration:8s]">
              <FaReact />
            </span>
          </div>

          <div className="absolute -bottom-12 left-1/4 h-10 w-10 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-lg transform-[translateZ(90px)] animate-bounce [animation-duration:4.5s]">
            <span className="text-sm font-bold text-cyan-600  bg-white">
              <BsTypescript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
