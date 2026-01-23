"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              className="cursor-pointer"
            >
              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-white'
                }`}
                style={{ 
                  fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.8)'
                }}
              >
                Discover Kigali
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-green-400' 
                  : scrolled 
                    ? 'text-white hover:text-green-400' 
                    : 'text-white hover:text-green-300'
              }`}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              Kigali Essentials
            </Link>
            <Link
              href="/places"
              className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                isActive('/places') 
                  ? 'text-green-400' 
                  : scrolled 
                    ? 'text-white hover:text-green-400' 
                    : 'text-white hover:text-green-300'
              }`}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              Places to Visit
            </Link>
            <Link
              href="/activities"
              className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                isActive('/activities') 
                  ? 'text-green-400' 
                  : scrolled 
                    ? 'text-white hover:text-green-400' 
                    : 'text-white hover:text-green-300'
              }`}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              Things to Do
            </Link>
            <Link
              href="/accommodations"
              className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                isActive('/accommodations') 
                  ? 'text-green-400' 
                  : scrolled 
                    ? 'text-white hover:text-green-400' 
                    : 'text-white hover:text-green-300'
              }`}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              Where to Stay
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 ${
                scrolled ? 'text-white hover:text-green-400' : 'text-white hover:text-green-300'
              }`}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`space-y-2 py-4 px-2 rounded-lg ${
            scrolled ? 'bg-black/50' : 'bg-black/60'
          }`}>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-white hover:text-green-300 hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/about') ? 'bg-white/20' : ''
              }`}
            >
              Kigali Essentials
            </Link>
            <Link
              href="/places"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-white hover:text-green-300 hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/places') ? 'bg-white/20' : ''
              }`}
            >
              Places to Visit
            </Link>
            <Link
              href="/activities"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-white hover:text-green-300 hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/activities') ? 'bg-white/20' : ''
              }`}
            >
              Things to Do
            </Link>
            <Link
              href="/accommodations"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-white hover:text-green-300 hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive('/accommodations') ? 'bg-white/20' : ''
              }`}
            >
              Where to Stay
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;