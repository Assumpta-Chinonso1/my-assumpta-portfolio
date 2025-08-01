import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
            I’m a design-minded, detail-oriented <span className="text-purple-600">Software Engineer</span>
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            I’m a fourth-year student at Northeastern University in Boston, studying Computer Science and Interaction Design.
            I have experience developing and designing software for the web — from simple landing pages to progressive web applications.
            My focus is to build software that not only works efficiently under the hood but also offers intuitive and pixel-perfect user experiences.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
            I treat work as a constant learning journey, always looking to grow and collaborate with people who push me to be my best.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            When I’m not in front of a screen, I’m probably snowboarding, traveling, petting dogs, or learning a new song on my uke 🎶🐶✈️.
          </p>
        </motion.div>

        {/* Headshot Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src="/path-to-your-headshot.jpg" // replace with your image path
            alt="Franches Headshot"
            className="w-72 h-72 rounded-full object-cover border-4 border-purple-300 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
