
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showResume, setShowResume] = useState(true);

  // Auto toggle text every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowResume((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "30px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "30px" }}>Disha</div>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <motion.a
            href="#home"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
            whileHover={{ scale: 1.2, textShadow: "0px 0px 8px #fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Home
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#about"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
            whileHover={{ scale: 1.2, textShadow: "0px 0px 8px #fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            About
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#projects"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
            whileHover={{ scale: 1.2, textShadow: "0px 0px 8px #fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Projects
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#contact"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
            whileHover={{ scale: 1.2, textShadow: "0px 0px 8px #fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Contact
          </motion.a>
        </li>

        {/* Auto-Toggling Twinkle Button */}
        <li>
          <a
            href="/disha.resume.4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1rem",
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              fontSize: "20px",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              animation: "twinkle 1.2s infinite alternate",
              display: "inline-block",
              textAlign: "center",
              minWidth: "110px", 
            }}
          >
            {showResume ? "Resume" : "Click Me"}
          </a>
        </li>
      </ul>

      {/* Twinkle animation */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 1; text-shadow: 0 0 5px #fff; }
            50% { opacity: 0.6; text-shadow: 0 0 15px #6a11cb; }
            100% { opacity: 1; text-shadow: 0 0 5px #2575fc; }
          }
        `}
      </style>
    </nav>
  );
}
