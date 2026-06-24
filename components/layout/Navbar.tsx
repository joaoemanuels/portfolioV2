"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.querySelector(item.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          const height = (element as HTMLElement).offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-md shadow-purple-500/20 transition-transform group-hover:scale-105">
            DS
          </div>
          <span className="font-semibold text-white tracking-wide">
            Daniel Silva
          </span>
        </a>

        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li
                    key={item.href}
                    className="relative flex flex-col items-center"
                  >
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                        isActive ? "text-purple-400" : "text-zinc-400"
                      }`}
                    >
                      {item.label}
                    </a>
                    {isActive && (
                      <span className="absolute -bottom-3 h-1.5 w-1.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <span className="h-5 w-px bg-zinc-800" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
