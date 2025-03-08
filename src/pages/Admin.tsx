import React, { useState, useEffect } from 'react';
import { getAppointments, clearAppointments, deleteAppointment } from '@/utils/appointmentUtils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, Trash2, User, Plus } from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal'; // adjust the path as needed

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [activeFilterDate, setActiveFilterDate] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to fetch appointments from localStorage
  const fetchAppointments = () => {
    const apps = getAppointments();
    setAppointments(apps);
  };

  // Function to fetch contact messages from localStorage
  const fetchContactMessages = () => {
    try {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      setContactMessages(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAppointments();
      fetchContactMessages();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'rabii' && password === 'rabii') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };

  const handleClearAppointments = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer tous les rendez-vous?')) {
      clearAppointments();
      setAppointments([]);
    }
  };

  const handleDeleteAppointment = (index) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous?')) {
      deleteAppointment(index);
      fetchAppointments();
    }
  };

  const handleDeleteMessage = (index) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce message?')) {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.splice(index, 1);
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      fetchContactMessages();
    }
  };

  // Apply text and date filters together
  const filteredAppointments = appointments.filter(app => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = activeFilterDate ? app.date === activeFilterDate : true;
    return matchesSearch && matchesDate;
  });

  // Update the active filter when the filter button is clicked
  const applyDateFilter = () => {
    setActiveFilterDate(filterDate);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">Administration</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">
                Nom d'utilisateur
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Appointment Modal for Creating New Appointments */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          fetchAppointments();
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gestion des Rendez-vous</h1>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Créer un rendez-vous
            </Button>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Déconnexion
            </Button>
            <Button variant="destructive" onClick={handleClearAppointments}>
              <Trash2 className="mr-2 h-4 w-4" /> Supprimer tout
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher par nom, email ou service..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="max-w-xs"
          />
          <Button onClick={applyDateFilter}>Filtrer</Button>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun rendez-vous trouvé</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Heure
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.map((appointment, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-400 mr-2" />
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {appointment.service}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center text-sm text-gray-900">
                          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" />
                          {appointment.time}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-gray-900">{appointment.email}</div>
                        <div className="text-sm text-gray-500">{appointment.phone}</div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {appointment.message || 'Aucun message'}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteAppointment(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Contact Messages Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Messages de Contact</h2>
          {contactMessages.length === 0 ? (
            <p className="text-gray-500">Aucun message trouvé.</p>
          ) : (
            <ul>
              {contactMessages.map((msg, index) => (
                <li
                  key={msg.id}
                  className="border-b py-2 flex justify-between items-start"
                >
                  <div>
                    <p>
                      <strong>{msg.name}</strong> ({msg.email}) a écrit:
                    </p>
                    <p>{msg.message}</p>
                    <p className="text-xs text-gray-500">
                      Envoyé le {new Date(msg.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteMessage(index)}
                    className="mt-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
