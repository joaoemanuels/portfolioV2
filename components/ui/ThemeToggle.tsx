"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!isMounted) {
    return <div className="h-7 w-14 rounded-full bg-zinc-800/50" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-7 w-14 cursor-pointer items-center rounded-full border border-zinc-700 bg-zinc-900 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      aria-label="Toggle Theme"
    >
      <span className="absolute left-1.5 text-xs text-amber-300">
        <FaSun />
      </span>
      <span className="absolute right-1.5 text-xs text-zinc-400 "><FaMoon /></span>

      <div
        className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
