
import React from 'react';
import { Star, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Hafsa Fathi',
    role: 'Patient',
    content: "Je recommande vivement le Dr Chahid Rabii pour son professionnalisme, son écoute et la qualité de ses soins. Un grand merci également à son assistante, Souad, pour son accueil chaleureux et son sourire. Un duo compétent et attentif qui met les patients en confiance",
    rating: 5,
    image: 'src/components/images/HafsaFathi.jpg',
  },
  {
    id: 2,
    name: 'Oussama El mezouari',
    role: 'Patient',
    content: "Je recommande vivement le Dr Chahid rabii pour ses compétences exceptionnelles et son professionnalisme. Il prend le temps d'expliquer les traitements, est très attentif à la douleur, et l'ambiance du cabinet est toujours accueillante et rassurante. Grâce à son expertise, mes visites chez le dentiste sont devenues beaucoup plus agréables. Une excellente expérience globale !",
    rating: 5,
    image: 'src/components/images/OussamaElmezouari.jpg',
  },
  {
    id: 3,
    name: 'Leila Mansouri',
    role: 'Patient',
    content: "Un grand merci au Dr. Chahid pour son professionnalisme et sa patience. J'avais une peur bleue des dentistes, mais son approche calme et rassurante m'a aidée à surmonter cette angoisse. Le cabinet est moderne et impeccable.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 4,
    name: 'Omar Benjelloun',
    role: 'Patient',
    content: "Service exceptionnel! J'ai eu un problème dentaire urgent et le Dr. Chahid m'a reçu le jour même. Il a résolu mon problème rapidement et efficacement. Je suis très reconnaissant pour sa réactivité et son professionnalisme.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 5,
    name: 'Sofia El Amrani',
    role: 'Patient',
    content: "Le traitement orthodontique proposé par le Dr. Chahid a transformé mon sourire. Je n'osais plus sourire à cause de mes dents mal alignées, mais maintenant je ne peux plus m'arrêter! Le suivi était impeccable et le résultat dépasse mes attentes.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
  {
    id: 6,
    name: 'Youssef Alaoui',
    role: 'Patient',
    content: "Une expérience parfaite du début à la fin. L'équipe est accueillante et le Dr. Chahid est très compétent. Les tarifs sont raisonnables pour la qualité des soins reçus. Je recommande ce cabinet à toute ma famille.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos patients disent</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          La satisfaction de nos patients est notre priorité. Découvrez les témoignages de ceux qui nous ont fait confiance pour leurs soins dentaires.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
          >
            {/* Quote icon */}
            <div className="absolute -top-4 -right-4 text-dental-100">
              <Quote className="h-20 w-20" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
