import { motion } from 'framer-motion';
import useInViewFade from './hooks/useInViewFade';
import profileImg from '../assets/profile-1.png';

const About = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} bg-[#0a192f] text-[#ccd6f6] py-20`}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        
        {/* Text left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff]">
            I'm a design-minded developer.
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            I’m <strong className="text-[#64ffda]">Assumpta Chinonso</strong>, focused on crafting pixel‑perfect, accessible websites that blend thoughtful design with clean code. I’m passionate about building user interfaces that look beautiful and function flawlessly across devices.
          </p>
          <p className="text-lg leading-relaxed">
            Currently exploring React, TailwindCSS, and Framer Motion to bring interactivity and elegance to every section. My goal? A portfolio that’s not just a showcase, but a smooth storytelling experience.
          </p>
        </motion.div>

        {/* Profile image on right */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, type: 'spring' }}
        >
          <img
            src={profileImg}
            alt="Assumpta"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-[#64ffda]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;

