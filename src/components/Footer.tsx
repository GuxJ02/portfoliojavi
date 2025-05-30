

const Footer = () => {
  // Navigation links for footer
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Social media links for footer
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-garz%C3%B3n-62b842255/' },
    // { name: 'GitHub', icon: <github size={18} />, href: '#' },
    // { name: 'Twitter', icon: <twitter size={18} />, href: '#' },
    // { name: 'Instagram', icon: <instagram size={18} />, href: '#' },
  ];

  return (
    <footer className="bg-dark pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="mb-4 inline-block text-xl font-bold">
              <span className="text-orange-accent">JAV</span>GM
            </a>
            <p className="mb-4 max-w-xs text-text-secondary">
              Currently living in Madrid, Spain.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-text-secondary transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="flex items-center gap-2 text-text-secondary transition-colors hover:text-white"
                >
                  {}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Javier Garzón. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
