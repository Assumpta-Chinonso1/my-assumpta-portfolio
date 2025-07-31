const About = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">

        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hey, I'm Assumpta.</h2>

          <p className="text-xl text-gray-300 mb-6">
            I’m a design-minded, detail-oriented frontend developer passionate about building
            beautiful UIs with clean, functional code.
          </p>

          <div className="h-1 w-16 bg-cyan-400 mb-6" />

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            <span className="font-semibold text-white">I'm a student at XYZ University</span> studying frontend development and design.
            I build sleek, performant interfaces — from simple landing pages to full-blown apps.
            My goal is to deliver smooth, intuitive, pixel-perfect experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I thrive on learning and growing. Whether I’m diving deeper into React or exploring UI/UX trends,
            I’m always looking for ways to level up. Collaboration is key — great things are built together.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            <span className="font-semibold text-white">When I'm not coding</span>, I’m reading fiction, sketching UI layouts, or vibing to Afrobeats with a cup of tea.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/your-profile.jpg" // Update this path to your actual image
            alt="Assumpta Chinonso"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
