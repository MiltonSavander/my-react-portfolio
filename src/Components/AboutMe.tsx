import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

function AboutMe() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row">
        <div>
          <h1 className="font-bold text-3xl">om mig</h1>
          <div className="w-[300px] md:w-[400px] lg:w-[500px]">
            <p className="text-md md:text-base lg:text-lg ">
              Låt mig introducera mig själv och det som driver mig! Jag är en
              lugn och nyfiken person som älskar att lösa problem och analysera
              olika situationer. Min förmåga att vara tålmodig och se bortom det
              uppenbara hjälper mig att hitta kreativa lösningar på olika
              utmaningar. Jag trivs i harmoniska miljöer och strävar alltid
              efter att skapa samarbete utan friktion. Genom min analytiska
              natur och min passion för problemlösning är jag redo att ta mig an
              nya projekt och utmaningar med öppet sinne och beslutsamhet. Jag
              ser fram emot att utforska möjligheterna tillsammans!
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
