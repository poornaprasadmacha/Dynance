import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Health Awareness', path: '/health-awareness' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Notification Bar for Local Trust & Quick Call */}
      <div className="bg-dynace-deep text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-dynace-cyan font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Kadapa, Andhra Pradesh
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">
              Representative: <strong className="text-white">{businessInfo.representative}</strong> ({businessInfo.designation})
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={businessInfo.phones.primary.telHref}
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-dynace-cyan" />
              <span>{businessInfo.phones.primary.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled ? 'border-dynace-border shadow-xs py-2.5' : 'border-dynace-border/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-hidden" aria-label="Dynace Health Awareness Center Homepage">
              <img
                src="/images/dynace-logo.webp"
                alt="Dynace Global Official Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-dynace-deep leading-tight">
                  Dynace Health Awareness Center
                </span>
                <span className="text-[11px] text-dynace-muted font-medium tracking-wide">
                  Kadapa, Andhra Pradesh
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-dynace-deep bg-dynace-bg font-semibold'
                      : 'text-dynace-body hover:text-dynace-blue hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action & Call Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={businessInfo.phones.primary.telHref}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-dynace-deep bg-dynace-bg hover:bg-gray-100 rounded-lg border border-dynace-border transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-dynace-blue" />
                <span>Call Us</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-dynace-blue hover:bg-dynace-deep rounded-lg shadow-2xs transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={businessInfo.phones.primary.telHref}
                className="p-2 text-dynace-deep hover:text-dynace-blue rounded-lg bg-dynace-bg border border-dynace-border"
                aria-label="Call business phone"
              >
                <Phone className="w-4 h-4 text-dynace-blue" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-dynace-deep hover:bg-gray-100 transition-colors focus:outline-hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-dynace-border bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-dynace-bg text-dynace-deep font-semibold'
                      : 'text-dynace-body hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="text-xs text-dynace-muted px-3">
                Kadapa Branch Support:
              </div>
              <a
                href={businessInfo.phones.primary.telHref}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-dynace-deep bg-dynace-bg rounded-lg border border-dynace-border"
              >
                <span>Call Center Phone</span>
                <span className="text-dynace-blue">{businessInfo.phones.primary.display}</span>
              </a>
              <Link
                to="/contact"
                className="block text-center w-full py-3 px-4 text-sm font-semibold text-white bg-dynace-blue rounded-lg shadow-2xs"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
