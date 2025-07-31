import { Typewriter } from 'react-simple-typewriter';
//import bgImage from '../assets/bg-1.jpg'


const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative px-4">
      {/* Star overlay */}
    <div className="absolute inset-0 z-0 bg-[url('/bg-1.jpg')] bg-cover bg-center opacity-60 h-screen w-full" />


   

      <div className="z-10 text-center">
        <div className="h-[1px] w-10 bg-white mx-auto mb-6 animate-pulse" />

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans mb-9 leading-tight text-white">
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

      {/* Bottom icon 
      <div className="absolute bottom-10 z-10">
        <div className="w-6 h-6 border-2 border-white rotate-45" />
      </div>*/}
    </section>
  );
};

export default Hero;

