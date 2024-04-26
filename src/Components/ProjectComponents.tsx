function ProjectComponents() {
  return (
    <div className=" flex flex-col gap-8 items-center justify-center mb-10">
      <div className="mt-4 flex items-center justify-center gap-8">
        <h1 id="projekt" className="font-bold text-2xl md:text-3xl ">
          Projekt
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              Spotify-klon
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              Jag skapade en Spotify-klon med fokus på att erbjuda en
              användarvänlig upplevelse både för mobila enheter och desktop.
              Genom att använda React och Material UI integrerade jag Spotify
              API för att låta användare spela musik och utforska sina
              personliga spellistor direkt från webbläsaren. Resultatet är en
              smidig och responsiv plattform för musikentusiaster att njuta av
              sina favoritlåtar var de än är.
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Html | React | CSS | Material UI | Spotify API | Spotify Playback
            SDK
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className=" my-[30px] ">
            <img src="/assets/spotify-preveiw.png" alt="spotify-preveiw" />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/tsm-spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Github
              </div>
            </a>
            <a
              href="https://spotify-klon-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                demo
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">Flaggapp</h1>
            <p className="mb-4 text-sm sm:text-base">
              Jag utvecklade en flaggapp som använder en REST Countries API och
              implementerade den med React, Material UI och CSS. Användare kan
              bläddra bland flaggor från hela världen och få detaljerad
              information om olika länders valutor, invånarantal och
              huvudstäder. Genom att kombinera stilren design med användbar
              funktionalitet, erbjuder appen en engagerande och lärorik
              upplevelse för användare som utforskar världens mångfald.
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Html | React | CSS | Material UI | Rest countries API
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className=" my-[30px] ">
            <img src="/assets/flaggapp-preveiw.png" alt="spotify-preveiw" />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/flag-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Github
              </div>
            </a>
            <a
              href="https://flag-app-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                demo
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              Klarna checkout
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              Jag skapade ett backend-projekt med en enkel butik som använder
              Fake Store API. Genom att integrera Klarnas checkout kunde jag
              erbjuda en sömlös betalningsupplevelse för kunderna. Genom att
              skriva in sina uppgifter kunde kunderna genomföra betalningen
              direkt genom Klarna, vilket ökar både bekvämligheten och
              tillförlitligheten för köpupplevelsen.
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Node.js | Express | Klarna API | Fake Store API{" "}
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className=" my-[30px] ">
            <img
              className=""
              src="/assets/klarna-checkout-preveiw.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/klarna-checkout"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Github
              </div>
            </a>
            <a
              href="https://klarna-checkout-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                demo
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              Lösenordsgenerator
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              Jag utvecklade en lösenordsgenerator som ger användarna möjlighet
              att skapa anpassade lösenord enligt deras preferenser. Med
              möjlighet att välja mellan att inkludera nummer, små eller stora
              bokstäver, och specialtecken, samt att ange längden på lösenordet,
              kan användare skapa unika och säkra lösenord. Dessutom erbjuder
              verktyget en styrkebedömning som ger användarna insikt i hur
              robust deras lösenord är, vilket hjälper till att säkerställa en
              hög nivå av säkerhet för deras konton och data.
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Html | CSS | Javascript
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className=" my-[30px] ">
            <img
              className=""
              src="/assets/lösenordsgenerator-preveiw.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/losenordsgenerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Github
              </div>
            </a>
            <a
              href="https://losenordsgenerator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                demo
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponents;
