// src/Components/FlipWords.jsx
// import React, { useState, useEffect } from "react";

// export const FlipWords = ({ words, className }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, [words]);

//   return <span className={className}>{words[index]}</span>;
// };


import React, { useState, useEffect } from "react";

export const FlipWords = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <span
      className={className}
      style={{
        color: "white",         // force white text
        fontSize: "2.5rem",      // force large size
        fontWeight: "900",      // extra bold
        lineHeight: "1.1",      // compact spacing
        display: "inline-block",
        transition: "opacity 0.5s ease-in-out", // smooth fade
        opacity: 1,
      }}
    >
      {words[index]}
    </span>
  );
};
