import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Pill,
  ArrowRight
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Placeholder images until real ones are uploaded
const serviceImages = {
  orthodontie: "src/components/images/orthodontie01.png",
  implantalogie: "src/components/images/implantologie-dentaire.png",
  chirurgie: "src/components/images/chirurgie-dentaire.jpg",
  soin: "src/components/images/soins.jpg",
  prothèsedentaire: "src/components/images/prothese-fixe.jpg",
  pedodontie: "src/components/images/Pedodontie.jpg",
  blanchiment: "src/components/images/blanchiment.jpg",
};

const services = [
  {
    id: 'orthodontie',
    title: 'Orthodontie',
    description: 'Correction de l’alignement des dents et de la mâchoire pour un sourire harmonieux et une meilleure fonction masticatoire.',
    longDescription: "L'orthodontie consiste en un ensemble de traitements visant à redresser les dents et corriger les malpositions dentaires. Ce service offre des solutions personnalisées telles que les appareils fixes, les aligneurs transparents et d'autres techniques modernes. Nos spécialistes examinent chaque cas individuellement pour garantir un résultat optimal, améliorant non seulement l'apparence mais aussi la fonctionnalité de la bouche.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.orthodontie
  },
  {
    id: 'implantalogie',
    title: 'Implantalogie',
    description: 'Remplacement des dents manquantes par des implants fixés dans l’os pour un résultat stable et durable.',
    longDescription: "L'implantalogie est une solution de remplacement des dents manquantes par des implants dentaires. Cette technique consiste en la pose chirurgicale d'implants en titane qui servent de support pour des couronnes, bridges ou prothèses. Ce service garantit une restauration durable et fonctionnelle, tout en préservant la structure osseuse et l'esthétique du sourire.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.implantalogie
  },
  {
    id: 'chirurgie',
    title: 'Chirurgie',
    description: 'Interventions chirurgicales (extractions, chirurgie des gencives, etc.) pour traiter les pathologies buccodentaires et restaurer la santé dentaire.',
    longDescription: "La chirurgie dentaire couvre un large éventail d'interventions, allant des extractions dentaires aux interventions sur les gencives. Réalisée par des professionnels expérimentés, chaque procédure est planifiée avec soin pour minimiser l'inconfort et accélérer la récupération. Nos interventions visent à restaurer la fonction et l'esthétique tout en assurant la sécurité du patient.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.chirurgie
  },
  {
    id: 'soin',
    title: 'Soin',
    description: 'Ensemble de traitements pour prévenir et traiter les problèmes dentaires courants et maintenir une bonne santé buccodentaire.',
    longDescription: "Les soins dentaires englobent la prévention, le diagnostic et le traitement des affections bucco-dentaires telles que les caries, la gingivite et le détartrage. Nous offrons des examens réguliers, des nettoyages professionnels et des conseils personnalisés pour maintenir une hygiène optimale, prévenant ainsi les problèmes futurs et assurant une santé dentaire durable.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.soin
  },
  {
    id: 'prothèsedentaire',
    title: 'Prothèse Dentaire',
    description: 'Pose de couronnes ou bridges pour remplacer ou renforcer des dents abîmées.',
    longDescription: "La prothèse dentaire vise à restaurer la fonction masticatoire et l'esthétique du sourire grâce à des couronnes, bridges ou implants sur mesure. Chaque prothèse est conçue pour s'adapter parfaitement à la morphologie du patient, offrant ainsi une solution fiable et durable pour remplacer les dents endommagées tout en préservant l'équilibre facial.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.prothèsedentaire
  },
  {
    id: 'pedodontie',
    title: 'Pédodontie',
    description: 'Soins dentaires pour enfants, axés sur la prévention et le traitement adapté aux jeunes patients.',
    longDescription: "La pédodontie se concentre sur les soins dentaires pour les enfants, en mettant l'accent sur la prévention et le suivi de la croissance. Nous offrons des traitements adaptés aux besoins spécifiques des jeunes patients, tout en enseignant de bonnes habitudes d'hygiène pour assurer une santé dentaire optimale dès le plus jeune âge.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.pedodontie
  },
  {
    id: 'blanchiment',
    title: 'Blanchiment',
    description: 'Éclaircissement de la couleur des dents pour un sourire plus lumineux.',
    longDescription: "Le blanchiment dentaire est une procédure esthétique visant à éclaircir la teinte des dents pour obtenir un sourire éclatant. En utilisant des techniques modernes et des produits sûrs, ce traitement élimine les taches et redonne de l'éclat à votre sourire. Le processus est rapide et offre des résultats visibles dès la première séance, tout en assurant la sécurité de l'émail.",
    icon: <Pill className="h-10 w-10 text-dental-500" />,
    image: serviceImages.blanchiment
  },
];

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;
  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="relative">
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
          <DialogHeader className="p-4 bg-dental-600 text-white">
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
          </DialogHeader>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            {service.longDescription || service.description}
          </p>
          <Button variant="ghost" onClick={onClose}>Fermer</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Dentaires</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nous proposons une gamme complète de services dentaires pour répondre à tous vos besoins, de la prévention aux traitements les plus avancés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-card rounded-lg overflow-hidden bg-white shadow transition-all hover:shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="service-overlay"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">{service.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">{service.icon}</div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button
                variant="ghost"
                className="text-dental-600 hover:text-dental-700 p-0 hover:bg-transparent"
                onClick={() => {
                  setSelectedService(service);
                  setModalOpen(true);
                }}
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ServiceModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
