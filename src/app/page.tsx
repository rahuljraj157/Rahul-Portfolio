// "use client";
// import { motion } from "framer-motion";
// import ParticlesBackground from "./components/ParticlesBackground";
// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden -z-20">
//  <div className="absolute inset-0 -z-10">
//            <ParticlesBackground />
//         </div>
//   <Navbar/> 
//        <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center opacity-0"
//         >
//           <h1 className="text-4xl font-bold mb-4 ">WELCOME TO MY PORTFOLIO</h1>
//           <button
//             // onClick={scrollToAbout}
//             className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
//           >
//             About Me
//           </button>
//         </motion.div>
// </div>

//   );
// }
// 
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import ParticlesBackground from "./components/ParticlesBackground";
// import Navbar from "./components/Navbar";
// import AboutMe from "./components/AboutMe";
// import MyProjects from "./myProjects/page";

// export default function Home() {
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const scrollToAbout = () => {
//     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       // hide navbar while scrolling
//       setShowNavbar(false);

//       // reset previous timeout
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }

//       // show navbar after 1 second of no scrolling
//       scrollTimeoutRef.current = setTimeout(() => {
//         setShowNavbar(true);
//       }, 1000);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <main className="relative bg-black text-white">
//       {/* Navbar */}
//       <motion.div
//         animate={{ opacity: showNavbar ? 1 : 0 }}
//         transition={{ duration: 0.4 }}
//         className="fixed top-0 left-0 w-full  z-50"
//       >
//         <Navbar />
//       </motion.div>

//       {/* Hero Section */}
//       <section  id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 ">
//           <ParticlesBackground />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center z-10"
//         >
//           <h1 className="text-4xl font-bold mb-4 ">WELCOME TO MY PORTFOLIO</h1>
//           <button
//             onClick={scrollToAbout}
//             className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
//           >
//             About Me
//           </button>
//         </motion.div>
//       </section>

//       {/* About Me Section */}
//       <section id="stacks" ref={aboutRef} className="py-20 px-4">
//         <AboutMe />
        
//       </section>
//       <section id="projects" className="z-10 relative bg-green-900">

//         <MyProjects/>
//       </section>
//     </main>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MyProjects from "./myProjects/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(false);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setShowNavbar(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-black text-white">
      {/* Navbar */}
      <motion.div
        animate={{ opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-8"
      >
        <div className="absolute inset-0">
          <ParticlesBackground />
        </div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl font-bold mb-4">WELCOME TO MY PORTFOLIO</h1>
          <button
            onClick={scrollToAbout}
            suppressHydrationWarning
            className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
          >
            About Me
          </button>
        </motion.div>

        {/* Left-side Extra Text */}
        <div className="absolute bottom-24 left-10 text-left z-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-3"
          >
            Hey, my name is <span className="text-green-400">Rahul J Raj</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-2xl font-semibold text-gray-300"
          >
            I am a{" "}
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="text-green-400 inline-block"
            >
              developer
            </motion.span>{" "}
            and a{" "}
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="text-pink-400 inline-block"
            >
              designer
            </motion.span>
          </motion.p>
        </div>

        {/* Right-side Social Icons */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 z-20">
          <a
            href="https://wa.me/7909178974"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-4xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:rahuljraj157@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-4xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/rahul__j_raj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-4xl"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="stacks" ref={aboutRef} className="py-20 px-4">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section id="projects" className="z-10 relative bg-green-900">
        <MyProjects />
      </section>
      <section id="contact" className="z-10 relative bg-black">
  <Contact />
  <Footer /> 
</section>

  
    </main>
  );
}
