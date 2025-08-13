import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const Background = () => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
  });

  // Animate planets' movement
  const planetsX = useTransform(springScroll, [0, 1], ["0%", "-30%"]);
  const planetsY = useTransform(springScroll, [0, 1], ["0%", "20%"]);

  return (
    <section className="absolute inset-0">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage:
            "url('https://bing.com/th/id/BCO.5bdb8978-8e8b-4b28-b21b-34c929385419.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated Planet Example */}
      <motion.div
        className="absolute w-40 h-40 top-1/4 left-1/4 -z-40"
        style={{
          x: planetsX,
          y: planetsY,
          backgroundImage: "url('https://bing.com/th/id/BCO.5bdb8978-8e8b-4b28-b21b-34c929385419.png')", // Replace with your own image path
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default Background;
