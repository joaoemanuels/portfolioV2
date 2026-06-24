import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800 border border-zinc-200/60 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800/80">
      {children}
    </span>
  );
}