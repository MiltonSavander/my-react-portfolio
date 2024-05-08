import React, { useState } from "react";

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

export const LanguageContext = React.createContext();

function App() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  const [english, setEnglish] = useState(false);

  return (
    <>
      <LanguageContext.Provider value={{ english, setEnglish }}>
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
      </LanguageContext.Provider>
    </>
  );
}

export default App;
