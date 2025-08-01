import { motion } from 'framer-motion';
import profileImg from '../assets/profile-1.png'; 
import useInViewFade from './hooks/useInViewFade';

const About = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } bg-[#0a192f] text-white py-24 px-6 md:px-20`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey, I'm Assumpta
          </h2>
          <p className="text-lg leading-relaxed">
            I’m a design-minded, detail-oriented <span className="text-yellow-400 font-semibold">frontend developer</span> passionate about combining beautiful code with beautiful design.
          </p>
          <hr className="w-24 border-t-4 border-yellow-400 rounded" />
          <p className="text-lg leading-relaxed">
            I’ve got hands-on experience using <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong> to craft fast, responsive, and scalable user interfaces. From smooth landing pages to interactive web apps, I focus on both form and function.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in building intuitive, accessible experiences and I’m especially passionate about tech for empowerment—particularly for women and underserved communities.
          </p>
          <p className="text-lg leading-relaxed">
            When I’m not writing code, I’m brainstorming ideas, reading, or spending time with family—always learning something new.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: -40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, type: 'spring' }}
        >
          <img
            src={profileImg}
            alt="Assumpta"
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;


