import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/f70f5978-9e0c-4b86-b536-713e6d34dff0/1778502918049_photo_2026-05-11_15-35-06.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Market', href: '#market' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-600/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-lg overflow-hidden flex items-center justify-center bg-teal-600 shadow-md">
              <img src={LOGO_URL} alt="Alta Logo" className="h-full w-full object-cover scale-150" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Alta <span className="text-teal-600">Analytics</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 transition-all hover:scale-105">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-teal-600 p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-teal-600/10 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-teal-600 border-b border-gray-50 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;