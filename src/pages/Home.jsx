import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default Home;