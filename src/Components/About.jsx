import { motion } from 'framer-motion';
import useInViewFade from './hooks/useInViewFade';
import profileImg from '../assets/profile-1.png'

const About = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-[1500ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } py-20 px-4 bg-gradient-to-br from-[#8758ff] via-[#b084f7] to-[#ffafe0] text-white`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Animate Image */}
        <motion.img
          src={profileImg}
          alt="Assumpta"
          className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
          initial={{ y: -200, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, type: 'spring' }}
        />

        {/* Text content */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-white/90">
            I’m <span className="text-[#ffddf4] font-semibold">Assumpta Chinonso</span> — a vibrant and passionate frontend developer who brings ideas to life using beautiful, intuitive designs. I love creating pixel-perfect, responsive UIs with <span className="text-yellow-200">React</span> and <span className="text-cyan-200">TailwindCSS</span>, and I’m obsessed with smooth animations and elegant code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
