import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-0"> {/* add top padding so content is below navbar */}
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
