import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  links?: NavLink[];
  logoText?: string;
  onSignIn?: () => void;
}

const Header = ({ 
  links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ],
  logoText = 'Alex Chen',
  onSignIn = () => console.log('Sign in clicked')
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-[var(--shadow-sm)]' 
        : 'bg-transparent'
    }`}>
      <nav aria-label="Primary" className="container flex items-center justify-between h-[var(--header-height)]">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('#hero')}
            className="text-lg font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--muted))] transition-colors"
          >
            {logoText}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--muted))] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Sign In Button */}
        <button
          onClick={onSignIn}
          className="btn btn-secondary text-xs px-6 py-2"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;