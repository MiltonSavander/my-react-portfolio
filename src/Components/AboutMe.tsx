import Lottie from "lottie-react";
import animationData from "../../public/assets/animation.json";
import { useContext } from "react";
import { LanguageContext } from "./App";

function AboutMe() {
  const { english } = useContext(LanguageContext);

  return (
    <div id="om-mig" className=" flex items-center justify-center mb-40">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row">
        <div>
          <h1 className="font-bold text-3xl">
            {english ? "About Me" : "Om mig"}
          </h1>
          <div className="w-[300px] md:w-[400px] h-[300px] lg:w-[500px]">
            <p className="text-md md:text-base lg:text-lg ">
              {english ? (
                <>
                  Let me introduce myself and what drives me! I am a calm and
                  curious person who loves solving problems and analyzing
                  various situations. My ability to be patient and see beyond
                  the obvious helps me find creative solutions to different
                  challenges. I thrive in harmonious environments and always
                  strive to create frictionless collaboration. With my
                  analytical nature and passion for problem-solving, I am ready
                  to take on new projects and challenges with an open mind and
                  determination. I look forward to exploring the possibilities
                  together!
                </>
              ) : (
                <>
                  Låt mig introducera mig själv och det som driver mig! Jag är
                  en lugn och nyfiken person som älskar att lösa problem och
                  analysera olika situationer. Min förmåga att vara tålmodig och
                  se bortom det uppenbara hjälper mig att hitta kreativa
                  lösningar på olika utmaningar. Jag trivs i harmoniska miljöer
                  och strävar alltid efter att skapa samarbete utan friktion.
                  Genom min analytiska natur och min passion för problemlösning
                  är jag redo att ta mig an nya projekt och utmaningar med öppet
                  sinne och beslutsamhet. Jag ser fram emot att utforska
                  möjligheterna tillsammans!
                </>
              )}
            </p>
          </div>
        </div>
        <div className="size-64 md:size-72 lg:size-96">
          <Lottie className="-z-1" animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
