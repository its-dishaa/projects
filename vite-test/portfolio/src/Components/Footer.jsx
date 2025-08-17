// // src/components/Footer.jsx
// import React from "react";
// import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6"; // ✅ Added FaGithub

// export default function Footer() {
//   return (
//     <footer
//       style={{
//         color: "white",
//         padding: "20px 20px 20px",
//         marginTop: "50px",
        
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           maxWidth: "1100px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Contact Section */}
//         <div>
//           <h3 style={{ marginBottom: "15px" }}>Contact</h3>
//           <p style={{ margin: "8px 0" }}>📧 disha.sahay2005@gmail.com</p>
//         </div>

//         {/* Social Links */}
//         <div style={{ textAlign: "center" }}>
//           <h3 style={{ marginBottom: "15px" }}>Follow Me</h3>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "15px",
//               fontSize: "1.5rem",
//             }}
//           >
//             <a
//               href="https://www.linkedin.com/in/disha-sahay-76b529315/"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "white" }}
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="https://x.com/DishaSahay62506"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "white" }}
//             >
//               <FaXTwitter />
//             </a>

//             <a
//               href="https://github.com/its-dishaa" 
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "white" }}
//             >
//               <FaGithub />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <hr style={{ border: "0.5px solid #333", margin: "20px 0" }} />
//       <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>
//         © 2025 Disha Sahay. All rights reserved.
//       </p>
//     </footer>
//   );
// }
// src/components/Footer.jsx
// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6"; // ✅ Removed Instagram import since unused

export default function Footer() {
  return (
    <footer
      style={{
        color: "white",
        padding: "20px 20px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Contact Section */}
        <div>
          <h3 style={{ marginBottom: "15px" }}>Contact</h3>
          <p style={{ margin: "8px 0" }}>📧 disha.sahay2005@gmail.com</p>
        </div>

        {/* Social Links */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "15px" }}>Follow Me</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              fontSize: "1.5rem",
            }}
          >
            <a
              href="https://www.linkedin.com/in/disha-sahay-76b529315/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/DishaSahay62506"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaXTwitter />
            </a>

            <a
              href="https://github.com/its-dishaa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <hr style={{ border: "0.5px solid #333", margin: "20px 0" }} />
      <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>
        © 2025 Disha Sahay. All rights reserved.
      </p>
    </footer>
  );
}
