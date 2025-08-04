import React from "react";

function Background() {
  return (
    <div
      className="text-bg-secondary"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // So it stays behind other content
      }}
    >
      {/* Optional: You can add a message or leave it empty */}
    </div>
  );
}

export default Background;
