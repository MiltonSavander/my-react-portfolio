import { Email_icon, Github_icon, Linkedin_icon } from "./SocialLinksIcons";

function SocialLinks() {
  return (
    <div className="hidden md:flex fixed left-[3%] bottom-0 w-16 h-72 flex-col items-center gap-3 ">
      <Linkedin_icon />
      <Github_icon />
      <Email_icon />

      <div className="w-1 h-52 my-[180px] absolute bg-myDarkBlue"></div>
    </div>
  );
}

export default SocialLinks;
