
import React from "react";
import astronaut from "../assets/astronaut.jpg";
import stars from "../assets/stars.jpg";

export default function Background() {
  return (
    <section className="fixed inset-0 -z-50">
      {/* Stars (much dimmer + faded) */}
      <div
      className="stars-layer"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.6) contrast(1.2)", // dim more
          opacity: 0.8, // fade stars
          zIndex: -1,
        }}
      />
      {/* Astronaut (more dominant) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${astronaut})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "normal", // ensures astronaut stays clear
          filter: "brightness(1.9) contrast(1.8)", // boost astronaut
          zIndex: -2,
        }}
      />
    </section>
  );
}

