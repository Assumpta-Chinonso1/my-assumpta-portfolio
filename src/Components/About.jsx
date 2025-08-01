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
      } py-24 px-6 bg-[#fefefe] text-gray-800`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Meet Assumpta 
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-700">
            I'm <span className="text-[#8758ff] font-semibold">Assumpta Chinonso</span>, a frontend developer with a love for crafting beautiful and intuitive web experiences.
            <br /><br />
            With tools like <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong>, I turn ideas into elegant, responsive, and high-performance interfaces.
            <br /><br />
            I build with purpose — especially empowering women and underserved communities through tech.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ y: -80, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4, type: 'spring' }}
        >
          <img
            src={profileImg}
            alt="Assumpta"
            className="w-72 h-72 md:w-[22rem] md:h-[22rem] object-cover rounded-full border-[8px] border-white shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
