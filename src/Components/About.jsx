




import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Hey, I'm Franches 👋</h2>
          <p className="text-gray-700 text-lg leading-8">
            I’m a design-minded, detail-oriented frontend developer passionate about blending beautiful code with beautiful design.
            <br /><br />
            As a final-year student juggling school and tech, I’m building my portfolio piece by piece. I have experience working with tools like React, TailwindCSS, and Framer Motion.
            <br /><br />
            I strive to craft intuitive and responsive interfaces, turning ideas into experiences that are not only functional but delightful to use.
            <br /><br />
            When I’m not coding, I’m probably documenting my journey, praying, or dreaming up the next big project.
          </p>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src="/path-to-your-image.jpg"
            alt="Franches"
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-purple-300"
          />
        </motion.div>

      </div>
    </section>
  );
}
