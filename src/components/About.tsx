
import React from 'react';
import {
  Award,
  GraduationCap,
  Heart,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';


const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Doctor image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="src/components/images/1.png"
              alt="Dr. Chahid Rabii"
              className="w-full h-auto"
            />
          </div>



          {/* Qualifications */}
          <div className="absolute -top-6 -left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-lg shadow-lg max-w-xs animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="text-dental-500 h-5 w-5" />
              <span className="font-medium">Doctorat en Chirurgie Dentaire</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-dental-500 h-5 w-5" />
              <span className="font-medium">Spécialiste en Implantologie</span>
            </div>
          </div>
        </div>

        {/* Right column - About text */}
        <div>
          <h4 className="text-dental-600 font-medium mb-2">À Propos de Nous</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dr. Chahid Rabii</h2>

          <p className="text-gray-600 mb-6">
            Bienvenue dans notre cabinet dentaire à Casablanca. Le Dr. Chahid Rabii propose des soins dentaires de haute qualité qui transforment la vie de nos patients.
          </p>

          <p className="text-gray-600 mb-8">
            Notre philosophie est centrée sur l'établissement de relations durables avec nos patients, basées sur la confiance, le respect et des soins exceptionnels. Nous utilisons les dernières technologies et techniques pour assurer des traitements efficaces et confortables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Équipement moderne de pointe",
              "Approche centrée sur le patient",
              "Techniques mini-invasives",
              "Soins dentaires complets",
              "Environnement stérilisé",
              "Résultats exceptionnels"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-dental-500 h-5 w-5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
