const style =
  "size-12 bg-myDarkBlue rounded-full flex items-center justify-center cursor-pointer hover:mt-[-4px] hover:bg-myBlue transition-all ease-in-out";
export const Linkedin_icon = () => {
  return (
    <div className="size-12">
      <a
        href="https://www.linkedin.com/in/milton-savander-8568982b5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${style}`}>
          <img
            className="size-10"
            src="/assets/linkedin_icon.svg"
            alt="linkedin"
          />
        </div>
      </a>
    </div>
  );
};

export const Github_icon = () => {
  return (
    <div className="size-12">
      <a
        href="https://github.com/MiltonSavander"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${style}`}>
          <img className="size-10" src="/assets/github_icon.svg" alt="github" />
        </div>
      </a>
    </div>
  );
};

export const Email_icon = () => {
  return (
    <div className="size-12">
      <a href="mailto:milton.savander@gmail.com">
        <div className={`${style}`}>
          <img
            className="size-10"
            src="/assets/email_icon.svg"
            alt="email_icon"
          />
        </div>
      </a>
    </div>
  );
};
