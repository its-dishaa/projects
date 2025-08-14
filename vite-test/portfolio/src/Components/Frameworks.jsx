// src/Components/Frameworks.jsx
import React from "react";

export const Frameworks = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {[".NET", "React", "Tailwind", "Node.js", "SOLID", "GRASP"].map(
        (fw, i) => (
          <span
            key={i}
            className="bg-purple-700 px-3 py-1 rounded-full text-sm text-white"
          >
            {fw}
          </span>
        )
      )}
    </div>
  );
};
