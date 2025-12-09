import React, { useState } from 'react';

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="booking-card">
      <div className="booking-tabs">
        <button 
          className={`tab-btn ${activeTab === 'flights' ? 'active' : ''}`} 
          onClick={() => setActiveTab('flights')}
        >
          Flights
        </button>
        <button 
          className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`} 
          onClick={() => setActiveTab('hotels')}
        >
          Hotels + Flights
        </button>
      </div>
      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Departure</label>
          <select><option>London (LHR)</option><option>New York (JFK)</option></select>
        </div>
        <div className="form-group">
          <label>Destination</label>
          <select><option>Maui, Hawaii</option><option>Paris, France</option><option>Dubai, UAE</option></select>
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+44 123 456 789" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="email@example.com" />
        </div>
        <div className="form-group">
          <label>Infants</label>
          <select><option>0</option><option>1</option></select>
        </div>
        <div className="form-group">
          <label>Adults</label>
          <select><option>1</option><option>2</option><option>3+</option></select>
        </div>
        <div className="form-group">
          <label>Children</label>
          <select><option>0</option><option>1</option><option>2+</option></select>
        </div>
        <button type="submit" className="submit-btn">INQUIRE US</button>
      </form>
    </div>
  );
};

export default BookingForm;