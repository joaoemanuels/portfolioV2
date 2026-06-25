import { BsTypescript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export function HeroMockup() {
  return (
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
          <RiTailwindCssFill className="text-cyan-400" size={18} />
        </div>

        <div className="absolute top-1/3 -right-6 h-10 w-10 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-lg transform-[translateZ(60px)] animate-bounce [animation-duration:3.5s]">
          <FaReact
            className="text-cyan-400 animate-spin [animation-duration:8s]"
            size={18}
          />
        </div>

        <div className="absolute -bottom-12 left-1/4 h-10 w-10 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-lg transform-[translateZ(90px)] animate-bounce [animation-duration:4.5s]">
          <BsTypescript className="text-cyan-600 bg-white" size={18} />
        </div>
      </div>
    </div>
  );
}
