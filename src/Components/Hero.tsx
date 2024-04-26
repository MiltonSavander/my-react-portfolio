import { motion } from "framer-motion";
import { useState } from "react";
import { scrollToSection } from "./Navbar";

export const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleButtonClick = () => {
    scrollToSection("projekt");
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, // Adjust the duration as needed
      },
    },
  };

  return (
    <div className="hero h-screen font-bold flex justify-center items-center flex-col-reverse md:flex-row gap-6 md:gap-0">
      <motion.div
        variants={textVariants}
        className="md:w-[400px] lg:w-[550px] flex flex-col justify-items-start gap-4"
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={textVariants}
          className="sm:text-lg md:text-xl lg:text-2xl tracking-wider"
        >
          MILTON SAVANDER
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          MERN stack
        </motion.h2>
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          webbutvecklare
        </motion.h2>
        <motion.button
          variants={textVariants}
          onAnimationComplete={handleAnimationComplete}
          onClick={handleButtonClick}
          className={`w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-12 border-4 border-myDarkBlue rounded-3xl text-sm md:text-xl ${
            animationComplete
              ? "hover:border-myHover hover:text-myHover hover:cursor-pointer hover:rounded-2xl transition-all "
              : ""
          }`}
        >
          PROJEKT
        </motion.button>
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="profile-container bg-gradient-to-tr from-myDarkBlue to-myBlue size-[200px] sm:size-[250px] md:size-[300px] lg:size-[350px] overflow-hidden"
      >
        <img
          className="mt-[-25%]"
          src="/assets/profilbild-no-background.png"
          alt="Milton Savander"
        />
      </motion.div>
    </div>
  );
};
