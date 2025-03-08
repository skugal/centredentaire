
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Store the message in localStorage for admin viewing
      try {
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages.push({
          ...formData,
          id: `msg-${Date.now()}`,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        toast({
          title: "Message envoyé",
          description: "Nous vous contacterons dans les plus brefs délais.",
        });
      } catch (error) {
        console.error('Error saving message:', error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Un problème est survenu lors de l'envoi de votre message.",
        });
      }

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-Nous</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Des questions ou besoin de prendre rendez-vous? N'hésitez pas à nous contacter. Nous sommes là pour vous aider.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-dental-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-dental-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Adresse</h4>
                <p className="text-gray-600">Centre dentaire Chahid - Dr.rabii chahid, 1er etage, Boulevard dakhla jamila 03 n 185, Casablanca, Maroc</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-dental-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-dental-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Téléphone</h4>
                <p className="text-gray-600">06 21 96 47 06 - 05 22 57 85 65</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-dental-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-dental-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600">centredentairechahid@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-dental-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-dental-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Heures d'ouverture</h4>
                <div className="text-gray-600">
                  <p>Lundi - Vendredi: 9h - 18h</p>
                  <p>Samedi: 9h - 13h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8 rounded-xl overflow-hidden h-64 shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Centre%20dentaire%20Chahid%20-%20Dr.rabii%20chahid,%201er%20etage,%20Boulevard%20dakhla%20jamila%2003%20n%20185,%20Casablanca&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet location"
            ></iframe>
          </div>


        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet*
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone*
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+212 6XX-XXXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message*
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Comment pouvons-nous vous aider?"
                rows={5}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-dental-500 hover:bg-dental-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-dots flex items-center justify-center gap-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
