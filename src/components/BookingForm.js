import React, { useState } from 'react';

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const [formData, setFormData] = useState({
    departure: 'London (LHR)',
    destination: 'Maui, Hawaii',
    departureDate: '',
    returnDate: '',
    name: '',
    phone: '',
    email: '',
    infants: '0',
    adults: '1',
    children: '0'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Fetch API to send data to your Node Server
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Sent Successfully to Database!");
        // Reset Form
        setFormData({
            departure: 'London (LHR)', destination: 'Maui, Hawaii', departureDate: '', returnDate: '', 
            name: '', phone: '', email: '', infants: '0', adults: '1', children: '0'
        });
      } else {
        alert("Failed to send booking.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server.");
    }
  };

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

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Departure</label>
          <select name="departure" value={formData.departure} onChange={handleChange}>
            <option>London (LHR)</option>
            <option>New York (JFK)</option>
            <option>Paris</option>
            <option>London</option>
            <option>Australia </option>
          </select>
        </div>
        <div className="form-group">
          <label>Destination</label>
          <select name="destination" value={formData.destination} onChange={handleChange}>
            <option>Maui, Hawaii</option>
            <option>Paris, France</option>
            <option>Dubai, UAE</option>
            <option>London</option>
            <option>Australia</option>
          </select>
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" name="departureDate" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Return Date</label>
          <input type="date" name="returnDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44..." required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
        </div>
        <div className="form-group">
          <label>Infants</label>
          <select name="infants" value={formData.infants} onChange={handleChange}>
            <option>0</option><option>1</option>
          </select>
        </div>
        <div className="form-group">
          <label>Adults</label>
          <select name="adults" value={formData.adults} onChange={handleChange}>
            <option>1</option><option>2</option><option>3+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Children</label>
          <select name="children" value={formData.children} onChange={handleChange}>
            <option>0</option><option>1</option><option>2+</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">INQUIRE US</button>
      </form>
    </div>
  );
};

export default BookingForm;