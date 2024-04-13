import { XMarkIcon } from "@heroicons/react/20/solid";
import { Linkedin_icon, Github_icon, Email_icon } from "./SocialLinksIcons";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "renslate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-gradient-to-b from-myBlue to-myDarkBlue`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HEM</div>
        <div className="nav-link-mobile">OM MIG</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">KONTAKTA</div>
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
