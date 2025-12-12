const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Default XAMPP/MySQL user
  password: '',      // Default XAMPP password is empty
  database: 'apex_holidays_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

// API Route to Receive Booking
app.post('/api/book', (req, res) => {
  const { 
    departure, destination, departureDate, returnDate, 
    name, phone, email, infants, adults, children 
  } = req.body;

  const sql = `INSERT INTO bookings 
    (departure, destination, departureDate, returnDate, customerName, phone, email, infants, adults, children) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    departure, destination, departureDate, returnDate, 
    name, phone, email, infants, adults, children
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving booking');
    } else {
      res.status(200).send('Booking successfully added!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// API to GET all bookings
app.get('/api/bookings', (req, res) => {
    const sql = "SELECT * FROM bookings ORDER BY created_at DESC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});
