import React, { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { saveAppointment } from '@/utils/appointmentUtils';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dentalServices = [
  "Consultation générale",
  "Nettoyage dentaire",
  "Traitement des caries",
  "Blanchiment des dents",
  "Traitement de canal",
  "Extraction dentaire",
  "Implant dentaire",
  "Orthodontie / Alignement",
  "Prothèse dentaire",
  "Dentisterie pédiatrique",
  "Urgence dentaire"
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

interface Appointment {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Local state to hold saved appointments
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [formData, setFormData] = useState<Appointment>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Duplicate check strictly on date and time.
  // This ignores changes to service or any other field.
  const checkDuplicateAppointment = (date: string, time: string): boolean => {
    return appointments.some(app => app.date === date && app.time === time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check only on date and time
    if (checkDuplicateAppointment(formData.date, formData.time)) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Un rendez-vous existe déjà à cette date et heure.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await saveAppointment(formData);
      setAppointments(prev => [...prev, formData]);

      // Reset the form after successful save.
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });

      toast({
        title: "Rendez-vous confirmé",
        description: "Votre demande de rendez-vous a été envoyée avec succès.",
      });

      onClose();
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Un problème est survenu lors de la prise de rendez-vous. L'information n'a pas été sauvegardée.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for the date input's min attribute.
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="bg-dental-600 text-white p-6">
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Prendre Rendez-vous
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
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

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-dental-600" />
                  Date*
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-dental-600" />
                  Heure*
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Sélectionnez une heure</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Although the Service field remains, it does not affect duplicate checking. */}
            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium">
                Service*
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>Sélectionnez un service</option>
                {dentalServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message (optionnel)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Détails supplémentaires ou questions spécifiques..."
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-dental-500 hover:bg-dental-600 mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-dots flex items-center justify-center gap-1 mr-2">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  Traitement en cours...
                </>
              ) : 'Confirmer le rendez-vous'}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
