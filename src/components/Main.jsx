import Hero from "./main/Hero";
import { sections } from "../utils/portfolioData";
import AboutMe from "./main/AboutMe";
import Testimonials from "./main/Testimonials";
import CTA from "./main/CTA";
import WhatsAppIcon from "./ui/WhatsAppIcon";
function Main() {
  return (
    <>
      <Hero />
      <hr id={sections[0].ref} />
      <AboutMe />
      <hr id={sections[1].ref} />
      <Testimonials />
      <hr id={sections[2].ref} />
      <CTA />
      <hr />
      <WhatsAppIcon />
    </>
  );
}

export default Main;
