// const icons = [
//   "css.svg",
//   "express.svg",
//   "git.svg",
//   "html.svg",
//   "javascript.svg",
//   "mongodb.svg",
//   "nodejs.svg",
//   "react_icon.svg",
//   "tailwind-css.svg",
//   "typescript.svg",
// ];

const containerStyle =
  "size-20 flex items-center justify-center bg-myDarkLightBlue rounded-full";
const imgStyle = "w-[80%] h-[80%]";

function Technologies() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 ">
      <h1 className="font-bold text-lg ">Teknologier och Ramverk</h1>
      <div className="flex items-center justify-center ">
        <div className={`${containerStyle}`}>
          <img className={`${imgStyle}`} src="/assets/techIcons/css.svg" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
