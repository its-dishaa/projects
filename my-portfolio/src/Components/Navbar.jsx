
// import { useState } from "react";
// import { motion } from "framer-motion";

// function Navigation() {
//   return (
// <ul className="flex flex-row gap-[60px] !gap-[60px] text-white list-none m-0 p-0">
//   <li className="flex-shrink-0"><a href="#home" className="hover:text-gray-300">Home</a></li>
//   <li className="flex-shrink-0"><a href="#about" className="hover:text-gray-300">About</a></li>
//   <li className="flex-shrink-0"><a href="#work" className="hover:text-gray-300">Work</a></li>
//   <li className="flex-shrink-0"><a href="#contact" className="hover:text-gray-300">Contact</a></li>
// </ul>

//   );
// }

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 backdrop-blur-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//         {/* Left - Name */}
//         <div className="flex-shrink-0">
//           <a href="/" className="text-white font-bold text-xl">
//             Disha
//           </a>
//         </div>

//         {/* Right - Links */}
//         <div className="flex flex-row ml-auto space-x-8">
//           <a href="#home" className="text-white hover:text-gray-300">Home</a>
//           <a href="#about" className="text-white hover:text-gray-300">About</a>
//           <a href="#work" className="text-white hover:text-gray-300">Work</a>
//           <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { motion } from "framer-motion";

// Navigation list as a reusable component
function Navigation() {
  return (
    <ul className="flex flex-row gap-[60px] text-white list-none m-0 p-0">
      <li className="flex-shrink-0"><a href="#home" className="hover:text-gray-300">Home</a></li>
      <li className="flex-shrink-0"><a href="#about" className="hover:text-gray-300">About</a></li>
      <li className="flex-shrink-0"><a href="#work" className="hover:text-gray-300">Work</a></li>
      <li className="flex-shrink-0"><a href="#contact" className="hover:text-gray-300">Contact</a></li>
    </ul>
  );
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Name */}
        <div className="flex-shrink-0">
          <a href="/" className="text-white font-bold text-xl">
            Disha
          </a>
        </div>

        {/* Right - Navigation Component */}
        <Navigation />
      </div>
    </nav>
  );
};

export default Navbar;
