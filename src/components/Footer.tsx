
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-dental-400" />
              <span className="text-xl font-bold">Dr. Chahid Rabii</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cabinet dentaire moderne offrant des soins complets et personnalisés pour toute la famille dans un environnement confortable et accueillant.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/centre_dentaire_chahid?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-dental-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/*<a href="#" className="text-gray-400 hover:text-dental-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'À propos', href: '#about' },
                { name: 'Témoignages', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' },

              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-dental-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {[
                'Prévention et Hygiène',
                'Dentisterie Esthétique',
                'Chirurgie Dentaire',
                'Soins d\'Urgence',
                'Dentisterie Pédiatrique',
                'Orthodontie'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-dental-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-Nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-dental-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Centre dentaire Chahid - Dr.rabii chahid, 1er etage, Boulevard dakhla jamila 03 n 185, Casablanca
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <a href="tel:0621964706" className="text-gray-400 hover:text-dental-400">
                  06 21 96 47 06
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <a href="tel:05 22 57 85 65" className="text-gray-400 hover:text-dental-400">
                  05 22 57 85 65
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-dental-400 flex-shrink-0" />
                <a href="mailto:centredentairechahid@gmail.com" className="text-gray-400 hover:text-dental-400">
                  centredentairechahid@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cabinet Dentaire Dr. Chahid Rabii. Tous droits réservés.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-dental-400">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-dental-400">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
