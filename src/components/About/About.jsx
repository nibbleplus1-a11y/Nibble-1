import Intro from "./Intro";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import CTA from "./CTA";

function About() {
  return (
    <section id="about" className="bg-[#030712] text-white">
      <Intro />
      <MissionVision />
      <WhyChooseUs />
      <Process />
      <CTA />
    </section>
  );
}

export default About;