export function getAppointments() {
  return JSON.parse(localStorage.getItem('appointments') || '[]');
}

export function saveAppointment(appointment: any) {
  const appointments = getAppointments();
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

export function clearAppointments() {
  localStorage.removeItem('appointments');
}

// New function to delete an appointment by its index
export function deleteAppointment(index: number) {
  const appointments = getAppointments();
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}
