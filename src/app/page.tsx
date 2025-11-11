import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-0"> {/* add top padding so content is below navbar */}
        <HeroSection />
        <AboutMe />
        <FadeInWhenVisible direction="right"><Projects /></FadeInWhenVisible>
        <FadeInWhenVisible direction="right"><Contact /></FadeInWhenVisible>
      </main>
    </>
  );
}
