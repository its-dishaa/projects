
import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = [
    "I am Disha",
    "A Full Stack Developer",
    "ML Explorer",
    "& New Tech Enthusiastic",
  ];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
     <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
    >
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10 -mt-16">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
  className="!text-white !text-6xl font-bold md:!text-7xl lg:!text-8xl"
  style={{ fontSize: "5rem", color: "white" }}
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 1 }}
>
  Hello,
</motion.h1>
        <motion.p
          className="text-8xl font-semibold text-white md:text-9xl lg:text-[10rem]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
         
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <FlipWords words={words} />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default HeroText;
