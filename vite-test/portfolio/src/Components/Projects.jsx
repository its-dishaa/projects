import React, { useState } from "react";
import { motion } from "framer-motion";

import img1BW from "../assets/black_white_1.jpg";
import img1Color from "../assets/mentalchild.jpg"; 
import img2BW from "../assets/black_white_2.jpg";
import img2Color from "../assets/education.jpg";
import img3BW from "../assets/black_white_3.jpg";
import img3Color from "../assets/girls.jpg";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Let's Live",
      desc: "Helps people who are depressed and suffering from mental disorder",
      bw: img1BW,
      color: img1Color,
    },
    {
      id: 2,
      title: "Edu-Buddy",
      desc: "Platforms that helps in providing education",
      bw: img2BW,
      color: img2Color,
    },
    {
      id: 3,
      title: "SheHelps",
      desc: "Empowering womens in distress",
      bw: img3BW,
      color: img3Color,
    },
  ];

  return (
    <section id="projects" style={{ padding: "4rem 0" }}>
    <div className="projects-grid" style={{ display: "flex", gap: "9rem" }}>
      {projects.map((p, i) => (
         <a
            key={p.id}
            href="https://github.com/its-dishaa" // replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
        <motion.div
          key={p.id}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{ width: "300px", cursor: "pointer" }}
        >
          <img
  src={hovered === i ? p.color : p.bw}
  alt={p.title}
  style={{
    width: "100%",
    height: "200px", // same height for all
    objectFit: "cover", // crops to fit without stretching
    borderRadius: "8px",
    transition: "0.5s ease",
  }}
/>

          <h3 style={{ color: "#ffffff", marginTop: "0.5rem",fontSize: "1.5rem"}}>{p.title}</h3>
        <p style={{ color: "#ffffff",fontSize: "1rem" }}>{p.desc}</p>
        </motion.div>
        </a>
      ))}
    </div>
    </section>
  );
};

export default Projects;
