
import React, { useState, useEffect } from "react";
import webImg from "../assets/web.jpg";
import logo from "../assets/logo.jpg";
import card3 from "../assets/starry2.jpg";
import { motion, AnimatePresence } from "framer-motion";

// Reusable animated background card
function AnimatedBackgroundCard({ image, children, className }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      className={`relative rounded-xl shadow-lg overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        backgroundPosition: `${pos.x}% ${pos.y}%`,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const lines = [
    "Software Development Intern (Jun 2025 – Aug 2025): Etelligens Technologies",
    "AICTE Virtual Internship (Jul 2024 – Aug 2024)",
  ];

  return (
    <section id="about" className="py-16 px-6 text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          I am a full-stack developer with a passion for machine learning,
          dev-ops, and tech that empowers.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 - Web Development */}
        <AnimatedBackgroundCard image={card3} className="h-65 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-2 text-white">Web Development</h3>
          <p className="text-gray-200">
            As a full-stack web developer specializing in the MERN stack, I architect and build responsive, component-driven interfaces with React, style mobile-first layouts using Tailwind CSS and Bootstrap, and power backend services with Node.js and Express.
          </p>
        </AnimatedBackgroundCard>

        {/* Card 2 - Tech Stack */}
        <AnimatedBackgroundCard image={card3} className="h-65 p-6 hover:scale-105 transition-transform">
  {/* Darker overlay specifically for this card */}
  <div className="absolute inset-0  bg-opacity-110 z-0"></div>
  <h3 className="text-2xl font-semibold mb-4 relative z-10">Tech Stack</h3>
  <div className="text-white space-y-1 relative z-10 text-lg">
    <p>Frontend: React, Tailwind CSS, Bootstrap</p>
    <p>Backend: Node.js, Express</p>
    <p>Database: MongoDB</p>
    <p>Tools: Git, Postman, VS Code</p>
    <p>Design: Figma, Framer Motion</p>
  </div>
</AnimatedBackgroundCard>

        
{/* Card 3 - Professional Experience */}
<AnimatedBackgroundCard image={card3} className="h-66 p-6">
  <h3 className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl font-semibold text-center">
    Professional Experience
  </h3>
  <div className="flex flex-col items-center justify-center mt-12 space-y-3">
    {lines.map((line, i) => (
      <p key={i} className="text-white text-lg">
        {line}
      </p>
    ))}
  </div>
</AnimatedBackgroundCard>

      </div>
    </section>
  );
}
