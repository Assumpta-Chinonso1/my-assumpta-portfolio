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
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Meet Assumpta 💫
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-700">
            I'm <span className="text-[#8758ff] font-semibold">Assumpta Chinonso</span>, a passionate frontend developer with a keen eye for detail and a heart for design. I love transforming ideas into seamless, engaging digital experiences. My toolbox includes <strong>React</strong>, <strong>TailwindCSS</strong>, and smooth animation libraries like <strong>Framer Motion</strong>.
            <br /><br />
            I specialize in creating clean, responsive, and user-friendly interfaces that not only look stunning but also function perfectly across all devices. Whether it's a portfolio, a startup site, or a web app — I bring the same level of energy, creativity, and precision to every project.
            <br /><br />
            I'm also deeply driven by purpose — aiming to use tech as a tool for empowerment, especially for women and youth in underserved communities.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.img
          src={profileImg}
          alt="Assumpta"
          className="w-80 h-80 rounded-full object-cover shadow-2xl border-[6px] border-white"
          initial={{ y: -100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4, type: 'spring' }}
        />
      </div>
    </section>
  );
};

export default About;
