import { useState } from "react";


import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Hero } from "./Hero";
import SocialLinks from "./SocialLinks";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import ProjectComponents from "./ProjectComponents";
import CTA from "./CTA";
import Background from "./Background";
import Footer from "./Footer";

function App() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <>
      <Background />
      {/* navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      {/* social links */}
      <SocialLinks />
      {/* hero */}
      <Hero />
      <AboutMe />
      <Technologies />

      <ProjectComponents />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
