import About from "@/components/About"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import SectionDivider from "@/components/ui/SectionDivider"
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
    </main>
  )
}