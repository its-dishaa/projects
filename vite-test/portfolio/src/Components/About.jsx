// src/Components/About.jsx
import React from "react";
import webImg from "../assets/web.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          I am a passionate developer who loves building things with clean code and creativity.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
       
        {/* Card 1 - Web Development */}
<div className="relative rounded-xl shadow-lg hover:scale-105 transition-transform h-64 overflow-hidden">
  {/* Blurred Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center  "
    style={{ backgroundImage: `url(${webImg})` }}
  ></div>

  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black bg-opacity-85"></div>

  {/* Text content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <div className="w-full p-4 rounded-b-xl">
      <h3 className="text-xl font-semibold mb-2 text-white">Web Development</h3>
      <p className="text-gray-200">
        Building responsive, dynamic, and interactive websites.
      </p>
    </div>
  </div>
</div>

        {/* Card 2 - UI/UX Design */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400">
            Crafting user-friendly and visually appealing interfaces.
          </p>
        </div>

        {/* Card 3 - Problem Solving */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
          <p className="text-gray-400">
            Logical thinking and efficient coding solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
