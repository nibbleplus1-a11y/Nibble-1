import Hero from "../components/Hero/Hero";
import MarqueeTicker from "../components/MarqueeTicker/MarqueeTicker";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <Services />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <About />
      <Contact />
    </>
  );
}

export default Home;