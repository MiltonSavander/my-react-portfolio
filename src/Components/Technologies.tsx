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
  "size-20 flex items-center justify-center bg-myDarkLightBlue rounded-full";
const imgStyle = "w-[70%] h-[70%]";

function Technologies() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-2xl ">
        Teknologier och ramverk jag använder
      </h1>
      <div className="flex items-center justify-center gap-4">
        {iconsData.map((icon) => {
          return (
            <div key={icon.name}>
              <h1 className="text-center font-bold">{icon.name}</h1>
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
