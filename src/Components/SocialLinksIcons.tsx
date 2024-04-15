const style =
  "size-12 bg-myDarkBlue rounded-full flex items-center justify-center cursor-pointer hover:mt-[-4px] hover:bg-myBlue transition-all ease-in-out";
export const Linkedin_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img
          className="size-10"
          src="./public/assets/linkedin_icon.svg"
          alt="linkedin"
        />
      </div>
    </div>
  );
};

export const Github_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img className="size-10" src="/assets/github_icon.svg" alt="github" />
      </div>
    </div>
  );
};

export const Email_icon = () => {
  return (
    <div className="size-12">
      <div className={`${style}`}>
        <img
          className="size-10"
          src="../../public/assets/email_icon.svg"
          alt="email_icon"
        />
      </div>
    </div>
  );
};
