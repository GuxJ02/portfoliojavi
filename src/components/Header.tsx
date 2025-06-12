import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const navLinks = [
  { id: 'home',         label: 'Home' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Experience' },
  { id: 'publications', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const mid = scrollY + window.innerHeight / 2;
      for (const { id } of navLinks) {
        const sec = document.getElementById(id);
        if (sec) {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (mid >= top && mid < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Ruta pública de tu CV:
   * - Opción A: renombra tu PDF a "Curriculum.pdf" (sin tilde), muévelo a public/Downloads/
   *             y deja el código así:
   *       const CV_URL = '/Downloads/Curriculum.pdf';
   * - Opción B: si prefieres mantener el nombre con tilde y en public/, usa URL codificada:
   *       const CV_URL = '/Curr%C3%ADculum.pdf';
   */
  const CV_URL = '/Downloads/Curriculum.pdf';

  // Descarga el PDF usando fetch+blob para evitar errores de HTML 404
  const handleDownloadCv = async () => {
    try {
      const res = await fetch(CV_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Curriculum.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error descargando CV:', err);
      alert('No se pudo descargar el CV. Revisa la ruta o el nombre del fichero.');
    }
  };

  const renderLink = (link: typeof navLinks[0]) => {
    const isActive = link.id === activeSection;
    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        className="relative mx-2 px-4 py-2 rounded-full overflow-visible group"
      >
        <span
          className={`
            absolute inset-0 rounded-full bg-orange-accent
            transform transition-transform duration-300
            drop-shadow-[0_0_8px_rgba(255,95,31,0.7)]
            ${isActive ? 'scale-100' : 'scale-0'}
            group-hover:scale-100
          `}
        />
        <span
          className={`
            relative text-sm font-medium transition-colors duration-300
            ${isActive
              ? 'text-white'
              : 'text-white/80 group-hover:text-white'}
          `}
        >
          {link.label}
        </span>
      </a>
    );
  };

  return (
    <header
      className={
        `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/5 backdrop-blur-sm py-3' : 'bg-transparent py-5'
        }`
      }
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#home"
          className="
            text-2xl font-bold bg-gradient-to-r from-orange-accent to-purple-accent
            bg-clip-text text-transparent hover:from-purple-accent hover:to-orange-accent
            transition-colors duration-500
          "
        >
          JAV<span className="text-white">GM</span>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className="hidden md:flex items-center">
          {navLinks.map(renderLink)}
        </nav>

        <Button
          variant="secondary"
          onClick={handleDownloadCv}
          className="hidden md:inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-accent to-purple-accent text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-accent"
        >
          <Download className="h-4 w-4" />
          <span>Download CV</span>
        </Button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/5 backdrop-blur-sm py-6 md:hidden">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map(renderLink)}
              <Button
                variant="secondary"
                onClick={handleDownloadCv}
                className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-accent to-purple-accent text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-accent"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
