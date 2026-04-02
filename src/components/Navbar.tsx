import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const SERVICES = [
  { name: 'CDSCO India Regulatory Services', path: '/services/cdsco' },
  { name: 'USFDA Regulatory Services', path: '/services/usfda' },
  { name: 'EU MDR CE Marking Services', path: '/services/eu-mdr' },
  { name: 'Core Documentation Services', path: '/services/core-doc' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#0a3651] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RF</span>
            </div>
            <div className="flex flex-col">
              <span className={cn('font-bold text-xl leading-none', isScrolled ? 'text-[#0a3651]' : 'text-white')}>
                RAC FORGE
              </span>
              <span className={cn('text-[10px] tracking-widest font-medium', isScrolled ? 'text-[#2c8498]' : 'text-white/80')}>
                PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn('font-medium hover:text-[#2c8498] transition-colors', isScrolled ? 'text-[#0a3651]' : 'text-white')}>
              Home
            </Link>
            <Link to="/about" className={cn('font-medium hover:text-[#2c8498] transition-colors', isScrolled ? 'text-[#0a3651]' : 'text-white')}>
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={cn(
                  'flex items-center font-medium hover:text-[#2c8498] transition-colors',
                  isScrolled ? 'text-[#0a3651]' : 'text-white'
                )}
                onMouseEnter={() => setShowServices(true)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={cn(
                  'absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 transition-all duration-200 transform origin-top',
                  showServices ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                )}
                onMouseLeave={() => setShowServices(false)}
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-[#0a3651] hover:bg-gray-50 hover:text-[#2c8498]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blogs" className={cn('font-medium hover:text-[#2c8498] transition-colors', isScrolled ? 'text-[#0a3651]' : 'text-white')}>
              Blogs
            </Link>
            <Link
              to="/contact"
              className={cn(
                'px-6 py-2 rounded-full font-semibold transition-all',
                isScrolled ? 'bg-[#0a3651] text-white hover:bg-[#2c8498]' : 'bg-white text-[#0a3651] hover:bg-[#2c8498] hover:text-white'
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(isScrolled ? 'text-[#0a3651]' : 'text-white')}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        )}
      >
        <div className="px-4 py-6 space-y-4">
          <Link to="/" className="block text-lg font-medium text-[#0a3651]">Home</Link>
          <Link to="/about" className="block text-lg font-medium text-[#0a3651]">About Us</Link>
          <div className="space-y-2">
            <span className="block text-lg font-medium text-[#0a3651]">Services</span>
            <div className="pl-4 space-y-2 border-l-2 border-[#2c8498]">
              {SERVICES.map((service) => (
                <Link key={service.path} to={service.path} className="block text-sm text-gray-600">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/blogs" className="block text-lg font-medium text-[#0a3651]">Blogs</Link>
          <Link to="/contact" className="block text-center bg-[#0a3651] text-white py-3 rounded-lg font-bold">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
