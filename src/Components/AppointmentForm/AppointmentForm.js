import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [appDate, setAppDate] = useState('');
    const [appTime, setAppTime] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, appDate, appTime });
      setName('');
      setPhoneNumber('');
      setAppDate('');
      setAppTime('');
    };
  
    return (
 <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
         <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input
            type="date"
            id="appDate"
            value={appDate}
            onChange={(e) => setAppDate(e.target.value)}
            required
          />
        </div>
         <div className="form-group">
          <label htmlFor="time">Book Time Slot:</label>
    <select name="appTime" id="appTime" 
            value={appTime}
            onChange={(e) => setAppTime(e.target.value)}
            required>
    <option value="9:00">9:00am</option>
    <option value="10:00">10:00am</option>
    <option value="11:00">11:00am</option>
    <option value="12:00">12:00am</option>
    <option value="1:00">1:00pm</option>
    <option value="2:00">2:00pm</option>
    <option value="3:00">3:00pm</option>
    <option value="4:00">4:00pm</option>
    <option value="5:00">5:00pm</option>
  </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
