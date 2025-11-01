import { useContext } from "react";
import { LanguageContext } from "./App";

function ProjectComponents() {
  const { english } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-8 items-center justify-center mb-10">
      <div className="mt-4 flex items-center justify-center gap-8">
        <h1
          id="projekt"
          className="font-bold text-2xl md:text-3xl "
        >
          {english ? "Projects" : "Projekt"}
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              {english ? "Spotify Clone" : "Spotify-klon"}
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              {english ? (
                <>
                  I built a Spotify clone with the goal of creating a smooth and user-friendly
                  experience on both mobile and desktop. Using React and Material UI, I integrated
                  the app with Spotify’s API, allowing users to play music and browse their personal
                  playlists directly in the browser. The result is a responsive music player that
                  makes it easy to listen, no matter where you are.
                </>
              ) : (
                <>
                  Jag byggde en Spotify-klon med målet att skapa en smidig och användarvänlig
                  upplevelse, både på mobil och desktop. Med hjälp av React och Material UI kopplade
                  jag ihop appen med Spotifys API, så att användare kan spela musik och bläddra i
                  sina egna spellistor direkt i webbläsaren. Det blev en responsiv musikspelare som
                  gör det enkelt att lyssna, oavsett var man är.
                </>
              )}
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Html | React | CSS | Material UI | Spotify API | Spotify Playback SDK
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className="my-[30px]">
            <img
              src="/assets/spotify-preveiw.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/tsm-spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Github" : "Github"}
              </div>
            </a>
            <a
              href="https://spotify-klon-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Demo" : "Demo"}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              {english ? "Weather Dashboard" : "Weather Dashboard"}
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              {english ? (
                <>
                  A weather app built with Next.js and Tailwind CSS that uses geolocation to fetch
                  the user's current position and display weather data through the Open-Meteo API.
                  Users can also search for weather information in other cities or countries. The
                  weather is shown in an hourly forecast with a graph and a daily forecast
                  displaying the day's highest and lowest temperatures. The app supports both dark
                  and light mode and features a responsive design for both large and small screens.
                </>
              ) : (
                <>
                  En väderapp byggd med Next.js och Tailwind CSS som använder geolocation för att
                  hämta användarens aktuella position och visar vädret med hjälp av Open-Meteo API.
                  Användaren kan även söka efter väder i andra städer eller länder. Vädret visas i
                  en timprognos med en graf och en daglig prognos med dagens högsta och lägsta
                  temperatur. Appen har stöd för både dark och light mode och har en responsiv
                  design för både stora och små skärmar.
                </>
              )}
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">Next.js | Open-Meteo | Tailwind</div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className="my-[30px]">
            <img
              className=""
              src="/assets/weather-dashboard-preview.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/weather-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Github" : "Github"}
              </div>
            </a>
            <a
              href="https://weather-dashboard-navy-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Demo" : "Demo"}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              {english ? "Flag App" : "Flaggapp"}
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              {english ? (
                <>
                  A web-based flag app that displays flags from around the world and fetches data
                  via the REST Countries API. Built with React, Material UI, and custom CSS, it
                  offers a clear and easy-to-navigate interface where users can explore countries’
                  flags, capitals, currencies, and population data. The goal was to combine simple
                  design with relevant content to create a good user experience.
                </>
              ) : (
                <>
                  En webbaserad flaggapp som visar flaggor från hela världen och hämtar information
                  via REST Countries API. Med React, Material UI och egen CSS skapades en tydlig och
                  lättnavigerad lösning där användare kan upptäcka länders flaggor, huvudstäder,
                  valutor och befolkningsdata. Målet var att kombinera enkel design med relevant
                  innehåll för en bra användarupplevelse.
                </>
              )}
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Html | React | CSS | Material UI | Rest countries API
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className="my-[30px]">
            <img
              src="/assets/flaggapp-preveiw.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/flag-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Github" : "Github"}
              </div>
            </a>
            <a
              href="https://flag-app-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Demo" : "Demo"}
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              {english ? "Promptopia" : "Promptopia"}
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              {english ? (
                <>
                  A platform for sharing useful AI prompts with others, built using Next.js and
                  MongoDB. The app uses Next.js built-in routing and NextAuth to manage
                  authentication and user accounts, including support for Google profiles and
                  profile pictures. Users can explore and filter prompts by tags or usernames,
                  making it easy to find relevant content. The goal was to create a functional and
                  user-friendly service that makes it simple to share and discover AI ideas.
                </>
              ) : (
                <>
                  En plattform för att dela användbara AI-prompts med andra, byggd med Next.js och
                  MongoDB. Appen använder Next.js inbyggda routing och NextAuth för att hantera
                  inloggning och användarkonton, inklusive möjligheten att använda exempelvis
                  Google-profiler och profilbilder. Användare kan utforska och filtrera prompts
                  baserat på taggar eller användarnamn, vilket gör det enkelt att hitta relevant
                  innehåll. Målet har varit att skapa en funktionell och lättanvänd tjänst som gör
                  det smidigt att dela och upptäcka AI-idéer.
                </>
              )}
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">
            Next.js | NextAuth | MongoDB | Tailwind
          </div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className="my-[30px]">
            <img
              className=""
              src="/assets/Promptopia-preview.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/promptopia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Github" : "Github"}
              </div>
            </a>
            <a
              href="https://promptopia-ruby-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                {english ? "Demo" : "Demo"}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around md:w-[800px] xl:w-[1000px] md:h-[400px] h-auto p-8 m-4 bg-myDarkLightBlue rounded-2xl gap-8 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
        <div className="md:w-[600px]  flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl mb-4 ">
              {english ? "Interactive Comments" : "Interaktiva kommentarer"}
            </h1>
            <p className="mb-4 text-sm sm:text-base">
              {english ? (
                <>
                  A small forum where users can write posts, reply to others, and upvote content.
                  The app shows which user is logged in, allowing you to edit or delete your own
                  posts and replies. Each post can be upvoted, and the ones with the highest ratings
                  are automatically shown at the top of the feed. The design is responsive and
                  optimized to work well on both mobile and desktop.
                </>
              ) : (
                <>
                  Ett litet forum där användare kan skriva inlägg, svara på varandra och rösta upp
                  innehåll. Appen visar vem du är inloggad som, vilket gör det möjligt att redigera
                  eller ta bort egna inlägg och svar. Varje post kan röstas upp, och inlägg med
                  högst betyg visas automatiskt högst upp i flödet. Designen är responsiv och
                  anpassad för att fungera bra på både mobil och desktop.
                </>
              )}
            </p>
          </div>
          <div className="font-bold text-sm sm:text-base">React | Tailwind | Javascript</div>
        </div>
        <div className="flex w-[260px] sm:w-[400px]  flex-col justify-center items-center ">
          <div className=" my-[30px] ">
            <img
              className=""
              src="/assets/Interactive-comment-preview.png"
              alt="spotify-preveiw"
            />
          </div>
          <div className="flex w-full items-center justify-around">
            <a
              href="https://github.com/MiltonSavander/interactive-comments"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Github
              </div>
            </a>
            <a
              href="https://interactive-comments-black.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 flex items-center justify-center font-bold border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl hover:border-myHover hover:text-myHover hover:rounded-2xl cursor-pointer transition-all ">
                Demo
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponents;
