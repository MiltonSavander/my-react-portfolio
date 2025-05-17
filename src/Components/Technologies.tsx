import { useContext } from "react";
import { LanguageContext } from "./App";

const iconsData = [
  { name: "Css", src: "css.svg" },
  { name: "Express", src: "express.svg" },
  { name: "Git", src: "git.svg" },
  { name: "Html", src: "html.svg" },
  { name: "Javascript", src: "javascript.svg" },
  { name: "MongoDB", src: "mongodb.svg" },
  { name: "Node.js", src: "nodejs.svg" },
  { name: "React", src: "react_icon.svg" },
  { name: "Tailwind", src: "tailwind-css.svg" },
  { name: "Typescript", src: "typescript.svg" },
  { name: "Next.js", src: "nextjs.svg" },
];

const containerStyle =
  "size-14 sm:size-16 md:size-20 flex items-center justify-center bg-myDarkLightBlue rounded-full transition-all bg-opacity-90 bg-clip-padding backdrop-blur-sm ";
const imgStyle = "w-[70%] h-[70%]";

function Technologies() {
  const { english } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-40">
      <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl ">
        {english ? "Technologies and frameworks I use" : "Teknologier och ramverk jag använder"}
      </h1>
      <div className="flex flex-wrap mx-14 items-center justify-center gap-4 ">
        {iconsData.map((icon) => {
          return (
            <div
              key={icon.name}
              className="flex flex-col justify-center items-center min-w-[91px]"
            >
              <h1 className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                {icon.name}
              </h1>
              <div className={`${containerStyle}`}>
                <img
                  className={`${imgStyle}`}
                  src={`/assets/techIcons/${icon.src}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
