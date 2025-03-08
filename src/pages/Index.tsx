
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';

const Index = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events for animations and navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Reveal elements on scroll
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle appointment modal
  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar 
        isScrolled={isScrolled}
        onAppointmentClick={openAppointment}
      />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero onAppointmentClick={openAppointment} />
        </section>
        
        <section id="services" className="py-24 reveal">
          <Services />
        </section>
        
        <section id="about" className="py-24 bg-gray-50 reveal">
          <About />
        </section>
        
        <section id="témoignages" className="py-24 reveal">
          <Testimonials />
        </section>
        
        <section id="faq" className="py-24 bg-gray-50 reveal">
          <FAQ />
        </section>
        
        <section id="contact" className="py-24 reveal">
          <Contact />
        </section>
      </main>
      
      <Footer />
      
      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={closeAppointment} 
      />

      <style jsx>{`
        .reveal {
          position: relative;
          opacity: 0;
          transform: translateY(150px);
          transition: all 1s ease;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes rotate-tooth {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-rotate-tooth {
          animation: rotate-tooth 3s infinite ease-in-out;
        }

        .btn-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 155, 167, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 155, 167, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 155, 167, 0); }
        }
      `}</style>
    </div>
  );
};

export default Index;
