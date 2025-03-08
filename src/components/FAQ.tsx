
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quelle est la fréquence recommandée pour un check-up dentaire?",
    answer: "Pour une santé bucco-dentaire optimale, nous recommandons un examen et un nettoyage professionnel tous les 6 mois. Toutefois, certaines conditions peuvent nécessiter des visites plus fréquentes. Dr. Chahid établira un calendrier personnalisé selon vos besoins spécifiques."
  },
  {
    question: "Comment puis-je savoir si j'ai besoin d'un traitement de canal?",
    answer: "Les signes courants incluent une douleur intense lors de la mastication, une sensibilité persistante au chaud ou au froid, une douleur spontanée, un gonflement des gencives, ou un assombrissement de la dent. Si vous ressentez l'un de ces symptômes, consultez rapidement pour éviter que l'infection ne s'aggrave."
  },
  {
    question: "Combien de temps durent les implants dentaires?",
    answer: "Avec des soins appropriés, les implants dentaires peuvent durer toute une vie. La clé de leur longévité réside dans une bonne hygiène bucco-dentaire, des visites régulières chez le dentiste, et l'évitement des habitudes néfastes comme le tabagisme ou le grincement des dents."
  },
  {
    question: "Quel âge est idéal pour une première consultation en orthodontie?",
    answer: "L'Association Américaine d'Orthodontie recommande une première évaluation orthodontique vers l'âge de 7 ans. À cet âge, suffisamment de dents permanentes ont émergé pour identifier d'éventuels problèmes et commencer un traitement précoce si nécessaire. Cependant, il n'est jamais trop tard pour corriger un alignement dentaire."
  },
  {
    question: "Les blanchiments dentaires sont-ils sans danger?",
    answer: "Les blanchiments dentaires professionnels sont généralement sûrs lorsqu'ils sont réalisés sous supervision dentaire. Dr. Chahid évaluera d'abord votre santé bucco-dentaire pour déterminer si vous êtes un bon candidat. Des sensibilités temporaires peuvent survenir mais disparaissent généralement peu après le traitement."
  },
  {
    question: "Comment gérer une urgence dentaire en dehors des heures d'ouverture?",
    answer: "Pour les urgences en dehors des heures d'ouverture, contactez notre numéro principal et suivez les instructions pour joindre notre service d'urgence. Pour les situations graves comme un traumatisme facial, rendez-vous directement aux urgences hospitalières. Nous proposons également des conseils sur notre site web pour gérer temporairement certaines situations en attendant un rendez-vous."
  },
  {
    question: "Acceptez-vous les assurances dentaires?",
    answer: "Oui, nous acceptons la plupart des assurances dentaires. Notre équipe administrative vous aidera à comprendre votre couverture et à maximiser vos avantages. Nous proposons également diverses options de paiement pour faciliter l'accès aux soins nécessaires."
  },
  {
    question: "Quelles mesures de sécurité avez-vous mises en place dans votre cabinet?",
    answer: "Nous suivons rigoureusement toutes les directives de stérilisation et de contrôle des infections établies par les autorités sanitaires. Notre cabinet utilise des équipements de stérilisation de pointe, des barrières de protection, et des procédures strictes de désinfection entre chaque patient pour garantir un environnement sûr et propre."
  }
];

const FAQ = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vous avez des questions sur nos services dentaires? Consultez nos réponses aux questions les plus fréquemment posées.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4 hover:text-dental-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-1">
          Vous ne trouvez pas la réponse que vous cherchez?
        </p>
        <p className="font-medium">
          Contactez-nous directement au{" "}
          <a
            href="tel:06 21 96 47 06"
            className="text-dental-600 hover:underline"
          >
            06 21 96 47 06
          </a>
          <p>-</p>
          <a
            href="tel:05 22 57 85 65"
            className="text-dental-600 hover:underline"
          >
            05 22 57 85 65
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
