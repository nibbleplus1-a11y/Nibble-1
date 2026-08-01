import Intro from "./Intro";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import TechStack from "./TechStack";
import Process from "./Process";
import CTA from "./CTA";

function About() {
  return (
    <section id="about" className="bg-[#05070D] text-white">
      <Intro />
      <MissionVision />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <CTA />
    </section>
  );
}

export default About;