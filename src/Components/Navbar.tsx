import { Bars3Icon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { LanguageContext } from "./App";

interface Props {
  openNav: () => void;
}

interface LanguageContextType {
  english: boolean;
  setEnglish: React.Dispatch<React.SetStateAction<boolean>>;
}

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (sectionId === "hem") {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  } else if (section) {
    const offset = section.offsetTop - 120; // Adjust this offset as needed
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};

const Navbar = ({ openNav }: Props) => {
  const { english, setEnglish } =
    useContext<LanguageContextType>(LanguageContext);

  const handleLanguageToggle = () => {
    setEnglish((prevState) => !prevState);
  };

  return (
    <nav className="fixed z-50 top-4 left-4 right-4 mx-auto max-w-[1400px] rounded-2xl h-[90px] bg-myBlue py-4 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
      <div className="flex items-center justify-between w-[85%] h-full mx-auto">
        <div
          className="flex-0.6 cursor-pointer text-[25px] text-myDarkLightBlue font-bold"
          onClick={() => scrollToSection("hem")}
        >
          <h1>
            MILTON <span className="text-myDarkBlue">SAVANDER</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="nav-link" onClick={() => scrollToSection("hem")}>
            {english ? "HOME" : "HEM"}
          </div>
          <div className="nav-link" onClick={() => scrollToSection("om-mig")}>
            {english ? "ABOUT ME" : "OM MIG"}
          </div>
          <div className="nav-link" onClick={() => scrollToSection("projekt")}>
            {english ? "PROJECTS" : "PROJEKT"}
          </div>
          <div className="nav-link" onClick={() => scrollToSection("kontakta")}>
            {english ? "CONTACT" : "KONTAKTA"}
          </div>
          <a
            href="https://drive.google.com/file/d/12AOfdFtJ1YP9W8w_MGIAbpkQrA_Ng8Au/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="nav-link">{english ? "RESUME" : "CV"}</div>
          </a>
          <div className="flag-container size-10 cursor-pointer">
            {english ? (
              <img
                onClick={handleLanguageToggle}
                src="/assets/flag-sweden.svg"
                alt="flag-sweden"
              />
            ) : (
              <img
                onClick={handleLanguageToggle}
                src="/assets/flag-united-kingdom.svg"
                alt="flag-united-kingdom"
              />
            )}
          </div>
          <div
            className="w-[2rem] lg:hidden h-[2rem] cursor-pointer text-myDarkBlue"
            onClick={openNav}
          >
            <Bars3Icon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
