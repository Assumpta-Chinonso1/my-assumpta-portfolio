export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-dark">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-primary font-bold text-xl">Assumpta</div>
        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#about" className="text-muted hover:text-primary">About</a></li>
          <li><a href="#experience" className="text-muted hover:text-primary">Experience</a></li>
          <li><a href="#projects" className="text-muted hover:text-primary">Projects</a></li>
          <li><a href="#contact" className="text-muted hover:text-primary">Contact</a></li>
        </ul>
        <a
          href="/resume.pdf"
          className="ml-6 px-4 py-2 text-sm border border-primary text-primary rounded hover:bg-primary hover:text-background transition"
        >
          Resume
     
        </a>
      </div>
    </nav>
  );
}
