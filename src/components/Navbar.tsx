
import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  onAppointmentClick: () => void;
}

const Navbar = ({ isScrolled, onAppointmentClick }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className={`h-8 w-8 ${isScrolled ? 'text-dental-600' : 'text-white'} animate-rotate-tooth`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-dental-950' : 'text-white'}`}>
              Dr. Chahid Rabii
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {['Accueil', 'Services', 'À propos', 'Témoignages', 'FAQ', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item === 'Accueil' ? 'home' : item === 'À propos' ? 'about' : item.toLowerCase())}
                    className={`font-medium transition-colors hover:text-dental-500 ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <Button 
              onClick={onAppointmentClick}
              className="bg-dental-500 hover:bg-dental-600 text-white btn-pulse"
            >
              Prendre Rendez-vous
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4">
              {['Accueil', 'Services', 'À propos', 'Témoignages', 'FAQ', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item === 'Accueil' ? 'home' : item === 'À propos' ? 'about' : item.toLowerCase())}
                    className="block py-2 text-gray-800 font-medium w-full text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <Button 
                  onClick={() => {
                    onAppointmentClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-dental-500 hover:bg-dental-600 text-white"
                >
                  Prendre Rendez-vous
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
