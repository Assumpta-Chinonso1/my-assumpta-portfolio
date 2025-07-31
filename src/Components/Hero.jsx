import { Typewriter } from 'react-simple-typewriter';
import useInViewFade from './hooks/useInViewFade';

const Hero = () => {
  const [ref, isVisible] = useInViewFade();

  return (
    <section className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative px-4">
      <div className="absolute inset-0 z-0 bg-[url('/star-1.jpg')] bg-cover bg-center opacity-70 h-screen w-full" />

      <div
        ref={ref}
        className={`z-10 text-center transition-opacity duration-[1200ms] ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="h-[1px] w-10 bg-white mx-auto mb-6 animate-pulse" />

        <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold font-sans mb-9 leading-tight text-white">
          Assumpta Chinonso
        </h1>

        <p className="text-2xl md:text-4xl font-light tracking-wider">
          <Typewriter
            words={[
              'Frontend Developer',
              'React Enthusiast',
              'UI/UX Lover',
              'Clean Code Advocate',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;



