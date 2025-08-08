'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar, Play, Phone } from 'lucide-react';

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

  const navItems = [
    { name: 'Home', href: '#home', icon: Heart },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Videos', href: '#videos', icon: Play },
    { name: 'Connect', href: '#connect', icon: Phone },
  ];

  return (
    <nav className={`sticky top-0 md:fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'md:bg-isabelline/95 md:backdrop-blur-md smd:hadow-lg' : 'md:bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black-olive">
              Breached Young Adults Ministry
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black-olive hover:text-verdigris px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black-olive hover:text-verdigris focus:outline-none focus:text-verdigris transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-isabelline/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black-olive hover:text-verdigris block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;