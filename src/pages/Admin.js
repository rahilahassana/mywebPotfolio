import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from your backend
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Helper to make MySQL dates look cleaner (removes the time part)
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return dateString.toString().substring(0, 10);
  };

  return (
    <div style={{ padding: '100px 5%', overflowX: 'auto' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Admin Dashboard - All Bookings</h1>
      
      <table style={{ 
        width: '100%', 
        minWidth: '1200px', // Ensures table doesn't get squashed
        borderCollapse: 'collapse', 
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ background: '#003366', color: '#ffffff', textAlign: 'left' }}>
            {/* Contact Info */}
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>Email</th>
            <th style={{ padding: '12px' }}>Phone</th>
            
            {/* Trip Details */}
            <th style={{ padding: '12px' }}>Departure</th>
            <th style={{ padding: '12px' }}>Destination</th>
            <th style={{ padding: '12px' }}>Dep. Date</th>
            <th style={{ padding: '12px' }}>Ret. Date</th>
            
            {/* Passenger Counts */}
            <th style={{ padding: '12px', textAlign: 'center' }}>Adults</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Child</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Infant</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} style={{ borderBottom: '1px solid #eeeeee' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{b.customerName}</td>
              <td style={{ padding: '12px' }}>{b.email}</td>
              <td style={{ padding: '12px' }}>{b.phone}</td>
              
              <td style={{ padding: '12px' }}>{b.departure}</td>
              <td style={{ padding: '12px', color: '#FF8C00', fontWeight: '500' }}>{b.destination}</td>
              <td style={{ padding: '12px' }}>{formatDate(b.departureDate)}</td>
              <td style={{ padding: '12px' }}>{formatDate(b.returnDate)}</td>
              
              <td style={{ padding: '12px', textAlign: 'center' }}>{b.adults}</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>{b.children}</td>
              <td style={{ padding: '12px', textAlign: 'center' }}>{b.infants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;