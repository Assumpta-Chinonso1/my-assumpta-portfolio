import { motion } from 'framer-motion';
import useInViewFade from './hooks/useInViewFade';
import profileImg from '../assets/profile-1.png'; 

const About = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-[1500ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-100'
      } py-28 px-6 md:px-20 bg-[#0f0f0f] text-gray-100`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          className="space-y-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white-00 leading-tight">
            Hey, I'm Assumpta 
          </h2>
          <p className="text-xl text-white-300 leading-relaxed">
            I’m a design-minded, detail-oriented <span className="text-purple-400 font-semibold">frontend developer</span> passionate about combining beautiful code with beautiful design.
          </p>

          <hr className="w-20 border-t-4 border-[#00ffff] rounded" />

          <p className="text-lg text-gray-300 leading-relaxed">
            I’ve got hands-on experience using <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong> to craft fast, <br />responsive, and scalable user interfaces. <br />From smooth landing pages to interactive web apps, I focus on both form and function.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in building intuitive, accessible experiences <br />and I’m especially passionate about tech for empowerment,<br /> particularly for women and underserved communities.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            When I’m not writing code, I’m brainstorming ideas,<br /> reading, or spending time with family <br /> and always learning something new.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, y: -60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, type: 'spring' }}
        >
          <img
            src={profileImg}
            alt="Assumpta"
            className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

