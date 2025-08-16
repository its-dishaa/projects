import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackgroundCard({ image, children, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-xl shadow-lg overflow-hidden h-64 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? { backgroundPosition: ["center", "60% 40%", "center"] } // Moves around and returns
          : { backgroundPosition: "center" }
      }
      transition={
        isHovered
          ? { repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }
          : { duration: 0.5 }
      }
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
        {children}
      </div>
    </motion.div>
  );
}
