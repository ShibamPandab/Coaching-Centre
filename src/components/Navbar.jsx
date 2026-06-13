import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when routing changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0AD0] backdrop-blur-md border-b border-brand-gold-dark/20 py-4 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <GraduationCap className="h-8 w-8 text-brand-gold group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-wider font-sans text-gold-gradient">
              AURUM ACADEMY
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-brand-gold'
                      : 'text-gray-300 hover:text-brand-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-gold-hover text-[#0A0A0A]"
            >
              <Phone className="w-3.5 h-3.5" />
              Enquire Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-brand-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Sleek accordion style) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-b border-brand-gold-dark/20 bg-[#0A0A0AF8] backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `w-full text-center text-sm font-semibold tracking-wider uppercase py-3 rounded border border-transparent transition-all ${
                  isActive
                    ? 'text-brand-gold bg-brand-gold-dark/10 border-brand-gold-dark/25'
                    : 'text-gray-300 hover:text-brand-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="w-full text-center text-xs font-semibold uppercase tracking-wider py-3 rounded bg-gold-hover text-[#0A0A0A] flex justify-center items-center gap-2 mt-4"
          >
            <Phone className="w-3.5 h-3.5" />
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
