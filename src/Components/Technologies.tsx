const icons = [
  "css.svg",
  "express.svg",
  "git.svg",
  "html.svg",
  "javascript.svg",
  "mongodb.svg",
  "nodejs.svg",
  "react_icon.svg",
  "tailwind-css.svg",
  "typescript.svg",
];

function Technologies() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 ">
      <h1 className="font-bold text-lg ">Teknologier och Ramverk</h1>
      <div className="flex items-center justify-center ">
        {icons.map((path) => (
          <div
            className="size-20 flex items-center justify-center bg-myDarkLightBlue rounded-full"
            key={path}
          >
            <img
              className="w-[80%] h-[80%]"
              src={`assets/techIcons/${path}`}
              alt={path}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
