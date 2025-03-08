
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, PhoneCall, ArrowRight } from 'lucide-react';

interface HeroProps {
  onAppointmentClick: () => void;
}

const Hero = ({ onAppointmentClick }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/d6eec44d-9752-4cff-b691-24be8a44bed9.png')",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dental-950/80 to-dental-950/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h4 className="text-white/90 text-lg md:text-xl mb-2 animate-fade-up">
            Cabinet Dentaire Dr. Chahid Rabii
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up animation-delay-300">
            Des sourires éclatants, une santé parfaite
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-up animation-delay-600">
            Notre équipe de professionnels dévoués est là pour vous offrir des soins dentaires de qualité supérieure dans un environnement accueillant et rassurant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-900">
            <Button
              onClick={onAppointmentClick}
              size="lg"
              className="bg-dental-500 hover:bg-dental-600 text-white btn-pulse"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Prendre Rendez-vous
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <a href="#services">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 animate-fade-up animation-delay-900">
            <div className="flex items-center gap-2 text-white">
              <PhoneCall className="h-5 w-5 text-dental-300" />
              <span className="font-medium">06 21 96 47 06 </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <PhoneCall className="h-5 w-5 text-dental-300" />
              <span className="font-medium">05 22 57 85 65 </span>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <div className="text-white">Ouvert du Lundi au Samedi • 9h à 18h</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white text-sm mb-2">Découvrir</div>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
