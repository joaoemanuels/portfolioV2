import { socials } from "@/data/hero";

export function HeroSocials() {
  return (
    <div className="flex gap-3">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white hover:bg-zinc-800"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
