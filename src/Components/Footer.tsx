import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { scrollToSection } from "./Navbar";
import { LanguageContext } from "./App";
import { useContext } from "react";

function Footer() {
  const { english } = useContext(LanguageContext);
  const handleButtonClick = (section: string) => {
    scrollToSection(section);
  };

  return (
    <footer className="bg-myDarkLightBlue flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col md:flex-row pt-4 gap-4 md:gap-14">
        <div className="max-w-[300px] ">
          <h1 className="font-bold text-lg">Milton Savander</h1>
          <p>
            {english
              ? "Web developer with experience in both front-end and back-end. Strong skills in design and coding to handle various projects and challenges."
              : "Webbutvecklare med erfarenhet inom både front-end och back-end. Starka färdigheter inom design och kodning för att hantera olika projekt och utmaningar."}
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{english ? "Navigate" : "Navigera"}</h1>
          <div
            className="cursor-pointer underline"
            onClick={() => handleButtonClick("hem")}
          >
            {english ? "Home" : "Hem"}
          </div>
          <div
            className="cursor-pointer underline"
            onClick={() => handleButtonClick("om-mig")}
          >
            {english ? "About Me" : "Om Mig"}
          </div>
          <div
            className="cursor-pointer underline"
            onClick={() => handleButtonClick("projekt")}
          >
            {english ? "Projects" : "Projekt"}
          </div>
          <a
            className="underline"
            href="https://drive.google.com/file/d/12AOfdFtJ1YP9W8w_MGIAbpkQrA_Ng8Au/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {english ? "Resume" : "CV"}
          </a>
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className="font-bold text-lg">{english ? "Contact" : "Kontakta"}</h1>
          <a
            href="mailto:milton.savander@gmail.com"
            target="_blank"
          >
            <div className="flex justify-start items-center gap-1">
              <IoMail />
              <p>milton.savander@gmail.com</p>
            </div>
          </a>
          <a href="tel:+46760085602">
            <div className="flex justify-start items-center gap-1">
              <FaPhone />
              <p>+46 760 085 602</p>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/T%C3%A4by/@59.4631719,17.984408,12z/data=!3m1!4b1!4m6!3m5!1s0x465f9bc95a595371:0xd08471de02f81b4!8m2!3d59.4419!4d18.0703298!16s%2Fm%2F0410v9z?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-start items-center gap-1">
              <FaLocationDot />
              <p>Täby, Stockholm</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="p-2">&copy; 2025 - Milton Savander</p>
      </div>
    </footer>
  );
}

export default Footer;
