import React, { useState, useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, BarChart3 } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

const navLinks = [
  { title: 'Features', href: '/#features' },
  { title: 'Pricing', href: '/#pricing' },
  { title: 'Testimonials', href: '/#testimonials' },
  { 
    title: 'Resources', 
    href: '#', 
    dropdown: [
      { title: 'API Documentation', href: '/api-docs' },
      { title: 'Case Studies', href: '/case-studies' }
    ] 
  },
  { title: 'Contact', href: '/#contact' }
];

const Navbar: React.FC = () => {
  const { scrolled } = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      if (!isHomePage) {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHomePage
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2"
          >
            <BarChart3 
              className={`w-7 h-7 ${scrolled || !isHomePage ? 'text-blue-600' : 'text-white'}`} 
            />
            <span 
              className={`text-xl font-bold ${scrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}
            >
              SaasFlow
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        scrolled || !isHomePage
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === link.title && (
                      <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => {
                              handleNavigation(item.href);
                              setActiveDropdown(null);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      scrolled || !isHomePage
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.title}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`p-2 rounded-md transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleNavigation('/signin')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white'
              }`}
            >
              Sign in
            </button>
            <button 
              onClick={() => handleNavigation('/signin')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                scrolled || !isHomePage
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-1 px-4">
              {navLinks.map((link) => (
                <div key={link.title}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.title)}
                        className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      >
                        {link.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === link.title && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => {
                                handleNavigation(item.href);
                                setActiveDropdown(null);
                              }}
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                            >
                              {item.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                    >
                      {link.title}
                    </button>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 px-4 flex flex-col space-y-3">
              <button 
                onClick={() => handleNavigation('/signin')}
                className="w-full px-4 py-2 text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Sign in
              </button>
              <button 
                onClick={() => handleNavigation('/signin')}
                className="w-full px-4 py-2 text-center bg-blue-600 text-white hover:bg-blue-700 rounded-md"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;