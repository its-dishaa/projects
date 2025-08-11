import React from 'react';
import { motion } from "framer-motion";


function Marquee() {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center bg-emphasis"
      style={{ height: '50vh', transform: 'translateY(-130px)'}}
    >
 <div className="border border-white p-3 rounded d-flex gap-3 w-100" 
 >
    
        <motion.div
          className="d-flex gap-5"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          <h1 className="display-1 fw-bold text-white mb-0">we are ochi</h1>
          <h1 className="display-1 fw-bold text-white mb-0">we are ochi</h1>
        </motion.div>
    </div>
    </div>
  );
}

export default Marquee; // Uppercase M
