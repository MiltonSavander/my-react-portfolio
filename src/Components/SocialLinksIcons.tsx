import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import email_icon from "../../assets/email_icon.svg";

const style =
  "size-12 bg-myDarkBlue rounded-full flex items-center justify-center cursor-pointer hover:mt-[-4px] hover:bg-myBlue transition-all ease-in-out";
export const Linkedin_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img className="size-10" src={linkedin_icon} alt="linkedin" />
      </div>
    </div>
  );
};

export const Github_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img className="size-10" src={github_icon} alt="github" />
      </div>
    </div>
  );
};

export const Email_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img className="size-10" src={email_icon} alt="email_icon" />
      </div>
    </div>
  );
};
