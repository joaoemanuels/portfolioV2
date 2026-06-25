import { Stat } from "@/data/about";

export function StatCard({ value, label, icon: Icon }: Stat) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50/80 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {value}
        </span>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
      </div>
    </div>
  );
}
