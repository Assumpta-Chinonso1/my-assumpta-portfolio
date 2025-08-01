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
      } py-32 px-6 bg-[#fefefe] text-gray-800`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Text */}
        <motion.div
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hello, I’m Assumpta Chinonso 💫
          </h2>
          <p className="text-lg md:text-[1.1rem] leading-7 text-gray-700">
            I'm a passionate frontend developer focused on building visually stunning, accessible, and responsive web applications. I turn creative ideas into real-world interfaces using technologies like <span className="font-semibold text-[#8758ff]">React</span>, <span className="font-semibold text-[#8758ff]">TailwindCSS</span>, and <span className="font-semibold text-[#8758ff]">Framer Motion</span>.
          </p>
          <p className="text-lg md:text-[1.1rem] leading-7 text-gray-700">
            I care about clean code, intuitive design, and seamless user experience. My mission is to build for impact — especially for communities and people that need tech the most.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4 }}
        >
          <img
            src={profileImg}
            alt="Assumpta Chinonso"
            className="w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;


