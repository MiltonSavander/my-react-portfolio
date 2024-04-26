import { XMarkIcon } from "@heroicons/react/20/solid";
import { Linkedin_icon, Github_icon, Email_icon } from "./SocialLinksIcons";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "renslate-x-0" : "translate-x-[-100%]";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (sectionId === "hem") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section) {
      const offset = section.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-gradient-to-b from-myBlue to-myDarkBlue`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("hem");
            closeNav();
          }}
        >
          HEM
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("om-mig");
            closeNav();
          }}
        >
          OM MIG
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("projekt");
            closeNav();
          }}
        >
          PROJECT
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("kontakta");
            closeNav();
          }}
        >
          KONTAKTA
        </div>
        <a
          href="https://drive.google.com/file/d/12AOfdFtJ1YP9W8w_MGIAbpkQrA_Ng8Au/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="nav-link-mobile">CV</div>
        </a>
        <div className="flex gap-4">
          <Linkedin_icon />
          <Github_icon />
          <Email_icon />
        </div>
      </div>
      <div
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-myDarkBlue"
        onClick={closeNav}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
