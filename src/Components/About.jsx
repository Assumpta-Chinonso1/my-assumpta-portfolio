import React from "react";
import { motion } from "framer-motion"
import briImage from '../assets/profile-1.png'

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12 bg-white">
      {/* Left Side - Text */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Hey, I'm Brittany.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I'm a design-minded, detail-oriented software engineer passionate about combining beautiful code with beautiful design.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I'm a fourth year student at Northeastern University in Boston studying computer science and interaction design. I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          When I'm not in front of a computer screen, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={briImage}
          alt="Brittany Chiang"
          className="rounded-full w-72 h-72 object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;

