'use client';

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-zinc-200/60 bg-zinc-50 dark:border-zinc-900 dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12 pb-12">
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-purple-500/10">
                DS
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white tracking-wide text-sm">
                Daniel Silva
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-[240px]">
              Front-end developer focused on building modern and responsive web applications.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              Links
            </span>
            <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              Services
            </span>
            <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <li>Web Development</li>
              <li>UI/UX Implementation</li>
              <li>Responsive Design</li>
              <li>Front-end Development</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              Social
            </span>
            <div className="flex gap-2">
              {['github', 'linkedin', 'twitter', 'mail'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition-all duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
                >
                  <span className="text-[10px] font-bold capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between border-t border-zinc-200/60 pt-8 dark:border-zinc-900/60">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {currentYear} Daniel Silva. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white cursor-pointer"
            aria-label="Scroll to top"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}