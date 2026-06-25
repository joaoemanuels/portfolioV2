import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800"
      >
        <About />
      </section>

      <section
        id="projects"
        className="flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800"
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800"
      >
        <Contact />
      </section>
    </main>
  );
}
