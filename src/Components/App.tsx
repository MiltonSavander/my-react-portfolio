import { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Hero } from "./Hero";
import SocialLinks from "./SocialLinks";
import AboutMe from "./AboutMe";

function App() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <>
      {/* navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      {/* social links */}
      <SocialLinks />
      {/* hero */}
      <Hero />
      <Hero />
      <AboutMe />
      {/* <img src="../src/assets/3547.jpg" alt="" /> */}
    </>
  );
}

export default App;
