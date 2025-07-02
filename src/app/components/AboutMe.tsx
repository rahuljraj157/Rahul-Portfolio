
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';



import TagCloud from 'TagCloud';

const texts = [
  'HTML', 'CSS','Redux', 'JavaScript', 'TypeScript', 'React',"Next.js","sql",
  'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Git',"DSA","Docker"
];

const AboutMe = () => {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!cloudRef.current) return;

  TagCloud([cloudRef.current], texts, {
    radius: 200,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  }as any);
}, []);

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white px-6 py-16 relative z-10">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side Content */}
       {/* Left Side Content */}
<div className="flex-1">
  <h2 className="text-3xl font-bold mb-4">About Me</h2>

  <p className="text-lg max-w-2xl mb-4">
    Hello, my name is Rahul J Raj.Iam a passionate full-stack developer with a strong focus on building modern, user-centric web applications. As a self-taught programmer, I’ve spent countless hours sharpening my skills — layer by layer — exploring the vast world of tech.
  </p>

  <p className="text-lg max-w-2xl mb-4">
    My strength lies in turning ideas into reality through clean, scalable code. I thrive on solving real-world problems and embracing challenges that push me to grow. Whether I’m working solo or collaborating with a team, I bring a high level of dedication and creativity to the table.
  </p>

  <p className="text-lg max-w-2xl mb-4">
    I’m constantly on the lookout for exciting opportunities that allow me to expand my skillset and contribute meaningfully to impactful projects. These are the moments where I feel truly alive as a developer.
  </p>

  <motion.h3
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className="text-3xl md:text-5xl font-semibold text-center mt-20 text-yellow-300"
  >
    "Creativity takes courage." <br />
    <span className="text-xl md:text-2xl text-green-200">~ Henri Matisse</span>
  </motion.h3>

  <div className="flex justify-center gap-6 mt-10 text-3xl text-green-300">
    <a
  href="https://www.linkedin.com/in/rahul-j-raj-913448294"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-green-400 transition"
>
  <FaLinkedin />
</a>


    <a
      href="mailto:rahuljraj157@gmail.com"
      className="hover:text-green-400 transition"
    >
      <FaEnvelope />
    </a>

    <a
      href="https://www.indeed.com/profile/your-indeed-id"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition"
    >
      <FaBriefcase />
    </a>
  </div>
</div>


        {/* Right Side 3D Tag Cloud */}
        
        <div className="flex-1 flex items-center justify-center">
                       

          <div
            ref={cloudRef}
            className="w-[300px] h-[300px] text-[#33ea0e] text-xl"
          ></div>
        </div>
      </div>
    </section>
  );
};




export default AboutMe;


      



