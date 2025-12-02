import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      {/* Other sections will be added here */}
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
