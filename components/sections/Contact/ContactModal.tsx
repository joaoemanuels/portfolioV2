'use client';

import React, { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 shadow-2xl max-w-md w-full focus:outline-none open:flex flex-col text-zinc-900 dark:text-zinc-50 fixed inset-0 m-auto"
    >
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900 pb-4 mb-6">
        <h3 className="text-lg font-bold tracking-tight">Entre em contato</h3>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-white text-sm font-medium transition-colors cursor-pointer"
        >
          Fechar (Esc)
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="mailto:seu.email@example.com"
          className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 hover:border-indigo-500/40 transition-all duration-200 group"
        >
          <span className="text-2xl">✉️</span>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">E-mail profissional</span>
            <span className="text-sm font-semibold group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">seu.email@example.com</span>
          </div>
        </a>

        <a
          href="https://wa.me/seunumerodeelefone"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-all duration-200 group"
        >
          <span className="text-2xl">💬</span>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">WhatsApp</span>
            <span className="text-sm font-semibold group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">Conversar no WhatsApp</span>
          </div>
        </a>
      </div>
    </dialog>
  );
}