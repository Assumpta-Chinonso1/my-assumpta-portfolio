
import { motion } from 'framer-motion';
import useInViewFade from './hooks/useInViewFade';
import profileImg from '../assets/profile-1.png';

const About = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-[1500ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } py-28 px-6 md:px-16 bg-[#fefefe] text-gray-800`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        
        {/* Text Content */}
        <motion.div
          className="space-y-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hey, I'm Assumpta 
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide">
            I'm a design-minded, detail-oriented <strong className="text-[#8758ff]">frontend developer</strong> passionate about combining beautiful code with beautiful design.
            <br /><br />
            With experience in <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong>, I build clean, responsive, and scalable web apps. From landing pages to full platforms, I bring precision and creativity to every project.
            <br /><br />
            I aim to create seamless user experiences with intuitive interfaces, and I see every project as a chance to grow and learn. At the core, I believe tech can empower — especially for women and youth in underserved communities.
            <br /><br />
            When I'm not coding, I’m either brainstorming ideas, sharing tech tips, reading, or spending quality time with family.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, y: -100 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, type: 'spring' }}
        >
          <img
            src={profileImg}
            alt="Assumpta"
            className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
