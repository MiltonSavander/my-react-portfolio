import Lottie from "lottie-react";
import animationData from "../../public/assets/animation.json";
import { useContext } from "react";
import { LanguageContext } from "./App";

function AboutMe() {
  const { english } = useContext(LanguageContext);

  return (
    <div
      id="om-mig"
      className=" flex items-center justify-center mb-40"
    >
      <div className="flex justify-center items-center flex-col-reverse md:flex-row">
        <div>
          <h1 className="font-bold mb-2 text-3xl">{english ? "About Me" : "Om mig"}</h1>
          <div className="w-[300px] md:w-[400px] h-[300px] lg:w-[500px]">
            <p className="text-md md:text-base lg:text-lg ">
              {english ? (
                <>
                  Hi! I’m a curious and solution-oriented web developer who enjoys working with both
                  technology and user experience. I thrive on solving problems, thinking logically,
                  and finding clear, practical solutions. I enjoy collaborating with others and
                  value a team environment that is open and supportive. For me, it’s important to
                  understand both the details and the bigger picture of a project to ensure the
                  result is thoughtful and user-friendly. I’m always eager to learn more and take on
                  new challenges that help me grow. Being part of projects where I can both
                  contribute and develop is something I truly value.
                </>
              ) : (
                <>
                  Hej! Jag är en nyfiken och lösningsfokuserad webbutvecklare som tycker om att
                  arbeta med både teknik och användarvänlighet. Jag trivs med att lösa problem,
                  tänka logiskt och hitta tydliga, fungerande lösningar. Jag gillar att samarbeta
                  med andra och uppskattar när det finns en öppen och hjälpsam stämning i teamet.
                  För mig är det viktigt att förstå både detaljerna och helheten i ett projekt, så
                  att resultatet blir genomtänkt och användbart. Jag är alltid nyfiken på att lära
                  mig mer och gillar att ta mig an nya utmaningar som får mig att växa. Att få vara
                  en del av projekt där jag både bidrar och utvecklas är något jag verkligen
                  värdesätter.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="size-64 md:size-72 lg:size-96">
          <Lottie
            className="-z-1"
            animationData={animationData}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
