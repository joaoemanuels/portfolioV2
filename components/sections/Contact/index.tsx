"use client";

import { useModal } from "@/hooks/useModal";
import { ContactModal } from "./ContactModal";
import { MoveRight } from "lucide-react";

export function Contact() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-zinc-950 border border-zinc-900 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/20 text-white text-xl">
            ✉️
          </div>

          <div className="flex flex-col space-y-1 pt-1">
            <h3 className="text-lg font-bold tracking-tight text-white">
              Vamos construir algo incrível juntos.{" "}
            </h3>
            <p className="text-sm text-zinc-400">
              Estou disponível para projetos e oportunidades como
              freelancer.{" "}
            </p>
          </div>
        </div>

        <button
          onClick={openModal}
          className="group flex items-center justify-center gap-2 px-6 py-3 shrink-0 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-purple-500/10 active:scale-[0.98] cursor-pointer w-full md:w-auto"
        >
          Entre em contato
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            <MoveRight />
          </span>
        </button>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
