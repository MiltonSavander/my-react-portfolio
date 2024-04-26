const iconsData = [
  { name: "css", src: "css.svg" },
  { name: "express", src: "express.svg" },
  { name: "git", src: "git.svg" },
  { name: "html", src: "html.svg" },
  { name: "javascript", src: "javascript.svg" },
  { name: "mongo db", src: "mongodb.svg" },
  { name: "nodejs", src: "nodejs.svg" },
  { name: "react", src: "react_icon.svg" },
  { name: "tailwind css", src: "tailwind-css.svg" },
  { name: "typescript", src: "typescript.svg" },
];

const containerStyle =
  "size-14 sm:size-16 md:size-20 flex items-center justify-center bg-myDarkLightBlue rounded-full transition-all bg-opacity-90 bg-clip-padding backdrop-blur-sm ";
const imgStyle = "w-[70%] h-[70%]";

function Technologies() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-40">
      <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl ">
        Teknologier och ramverk jag använder
      </h1>
      <div className="flex flex-wrap mx-14 items-center justify-center gap-4 ">
        {iconsData.map((icon) => {
          return (
            <div key={icon.name}>
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
