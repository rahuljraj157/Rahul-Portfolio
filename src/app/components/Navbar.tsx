// "use client";
// import { useEffect, useState, useRef } from "react";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const timeoutId = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     // Show navbar after 1 second initially
//     timeoutId.current = setTimeout(() => {
//       setShowNavbar(true);
//     }, 1000);

//     const handleScroll = () => {
//       setShowNavbar(false);
//       if (timeoutId.current) {
//         clearTimeout(timeoutId.current);
//       }
//       // Restart timeout to show navbar after 1 second of no scroll
//       timeoutId.current = setTimeout(() => {
//         setShowNavbar(true);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       if (timeoutId.current) clearTimeout(timeoutId.current);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return showNavbar ? (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-50 flex gap-6 justify-center">
//       <a href="#home">Home</a>
//       <a href="#stacks">Stacks</a>
//       <a href="#projects">Projects</a>
//       <a href="#contact">Contact</a>
//     </nav>
//   ) : null;
// };

// export default Navbar;
// "use client";
// import { useEffect, useState, useRef } from "react";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const timeoutId = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     timeoutId.current = setTimeout(() => {
//       setShowNavbar(true);
//     }, 1000);

//     const handleScroll = () => {
//       setShowNavbar(false);
//       if (timeoutId.current) {
//         clearTimeout(timeoutId.current);
//       }
//       timeoutId.current = setTimeout(() => {
//         setShowNavbar(true);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       if (timeoutId.current) clearTimeout(timeoutId.current);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return showNavbar ? (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white px-6 py-4 z-50 flex items-center justify-center relative">
//       {/* Centered Links */}
//       <div className="flex gap-6">
//         <a href="#home">Home</a>
//         <a href="#stacks">Stacks</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>

//       {/* Resume button positioned absolutely at top-right */}
//       <div className="absolute right-6">
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-sm"
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   ) : null;
// };

// export default Navbar;
// "use client";
// import { useEffect, useState, useRef } from "react";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const timeoutId = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     timeoutId.current = setTimeout(() => {
//       setShowNavbar(true);
//     }, 1000);

//     const handleScroll = () => {
//       setShowNavbar(false);
//       if (timeoutId.current) {
//         clearTimeout(timeoutId.current);
//       }
//       timeoutId.current = setTimeout(() => {
//         setShowNavbar(true);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       if (timeoutId.current) clearTimeout(timeoutId.current);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return showNavbar ? (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white px-6 py-4 z-50 flex items-center justify-center relative">
      
//       {/* 🔵 Logo on far left */}
//       <div className="absolute left-6">
//         <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
//       </div>

//       {/* 🟢 Centered Nav Links */}
//       <div className="flex gap-6">
//         <a href="#home">Home</a>
//         <a href="#stacks">Stacks</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>

//       {/* 🟣 Resume Button on far right */}
//       <div className="absolute right-6">
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-sm"
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   ) : null;
// };

// export default Navbar;




// "use client";
// import { useEffect, useState, useRef } from "react";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const timeoutId = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     timeoutId.current = setTimeout(() => {
//       setShowNavbar(true);
//     }, 1000);

//     const handleScroll = () => {
//       setShowNavbar(false);
//       if (timeoutId.current) {
//         clearTimeout(timeoutId.current);
//       }
//       timeoutId.current = setTimeout(() => {
//         setShowNavbar(true);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       if (timeoutId.current) clearTimeout(timeoutId.current);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return showNavbar ? (
//     <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white px-6 py-4 z-50 flex items-center justify-center relative">
      
//       {/* 🔵 Logo on far left */}
//       <div className="absolute left-6">
//         <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
//       </div>

//       {/* 🟢 Centered Nav Links */}
//       <div className="flex gap-6">
//         <a href="#home">Home</a>
//         <a href="#stacks">Stacks</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>

//       {/* 🟣 Resume Button on far right */}
//       <div className="absolute right-6">
//         <a
//           href="/resume.pdf"
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-sm"
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   ) : null;
// };

// export default Navbar;

"use client";

import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setShowNavbar(true);
    }, 1000);

    const handleScroll = () => {
      setShowNavbar(false);
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setShowNavbar(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showNavbar ? (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white px-4 py-3 z-50 flex items-center justify-between flex-wrap">
      {/* 🔵 Logo on far left */}
      <div className="flex items-center pl-2">
        <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
      </div>

      {/* 🟢 Center Nav Links */}
      <div className="flex flex-wrap gap-4 justify-center flex-1 text-sm sm:text-base">
        <a href="#home">Home</a>
        <a href="#stacks">Stacks</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* 🟣 Resume on right */}
      <div className="pr-2">
        <a
          href="/my-resume.pdf"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded text-xs sm:text-sm"
        >
          Resume
        </a>
      </div>
    </nav>
  ) : null;
};

export default Navbar;

