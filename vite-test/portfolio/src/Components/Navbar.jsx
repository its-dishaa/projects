// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: "#333",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Disha</div>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
        <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
}
