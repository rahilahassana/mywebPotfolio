import React, { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';

// 1. Define your destinations and images here
const destinations = [
  {
    name: "Maui",
    image: "Images/Muai.jpg"
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  { 
    name: "Dubai",
    image: "Images/Dubai.jpg"
  },
  {
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
];

const Home = () => {
  // State for Typewriter and Background
  const [index, setIndex] = useState(0); // Tracks which destination we are on
  const [subIndex, setSubIndex] = useState(0); // Tracks character index for typing
  const [reverse, setReverse] = useState(false); // Tracks if we are backspacing
  const [blink, setBlink] = useState(true); // Blinking cursor state

  // Typewriter Logic
  useEffect(() => {
    if (index >= destinations.length) {
        setIndex(0); // Loop back to start
        return;
    }

    const currentWord = destinations[index].name;

    if (subIndex === currentWord.length + 1 && !reverse) {
      // Word finished typing, wait a bit then start deleting
      setTimeout(() => setReverse(true), 2000); 
      return;
    }

    if (subIndex === 0 && reverse) {
      // Word finished deleting, move to next word
      setReverse(false);
      setIndex((prev) => (prev + 1) % destinations.length);
      return;
    }

    // Typing speed logic
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Delete fast (75ms), Type slow (150ms)

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor blinking effect
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <>
      {/* Hero Section with Dynamic Background */}
      <section 
        className="hero" 
        id="hero"
        style={{
          // Apply dynamic background image
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${destinations[index].image})`
        }}
      >
        <div className="hero-content">
          <h1>
            Let’s Enjoy Your Trip in{' '}
            <span style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>
              {/* This renders the letters based on subIndex */}
              {destinations[index].name.substring(0, subIndex)}
              {/* Blinking Cursor */}
              <span className="typing-cursor">|</span>
            </span>
          </h1>
          <p>Experience the perfect holiday with personalized packages tailored just for you.</p>
        </div>
        <BookingForm />
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section-common">
        <div className="section-header">
          <h2>Why Choose Apex Holidays</h2>
          <span className="header-line"></span>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-earth-americas"></i>
              <i className="fa-solid fa-star icon-overlay"></i>
            </div>
            <h3>Unrivalled Quality</h3>
            <p>Exclusive Fly + Stay Offers</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <h3>Spend Less</h3>
            <p>Unbeatable Offers</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-spa"></i>
            </div>
            <h3>Peace of Mind</h3>
            <p>Flexible policies</p>
          </div>
        </div>
      </section>

      {/* Trusted Operator */}
      <section className="trusted-section" id="trusted">
        <div className="trusted-img">
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="London Landmark" />
        </div>
        <div className="trusted-content">
          <span className="section-tag">Why Choose Us</span>
          <h2>Trusted Tour Operator in United Kingdom</h2>
          <p>We pride ourselves on being one of the most reliable and customer-centric tour operators in the UK. With over a decade of experience, we specialize in crafting personalized travel experiences that cater to your unique desires.</p>
          <p>From seamless booking processes to 24/7 on-trip support and exclusive deals on flights and hotels, Apex Holidays ensures your journey is stress-free and unforgettable.</p>
        </div>
      </section>

      {/* Latest Deals */}
      <section className="deals-section section-common" id="deals">
        <div className="section-header">
          <h2>Latest Flight Deals</h2>
          <span className="header-line"></span>
        </div>
        <div className="deals-grid">
          <div className="deal-card">
            <div className="card-img">
              <img src="Images/p1.jpg" alt="Dubai" />
            </div>
            <div className="card-content">
              <h3>Dubai, UAE</h3>
              <p>Flights + Hotel Stay | 5 Nights</p>
              <a href="#" className="book-btn">BOOK NOW</a>
            </div>
          </div>
          <div className="deal-card">
            <div className="card-img">
              <img src="Images/p2.jpg" alt="Thailand" />
            </div>
            <div className="card-content">
              <h3>Bangkok, Thailand</h3>
              <p>Flights + Hotel Stay | 7 Nights</p>
              <a href="#" className="book-btn">BOOK NOW</a>
            </div>
          </div>
          <div className="deal-card">
            <div className="card-img">
              <img src="Images/p3.jpg" alt="Qatar" />
            </div>
            <div className="card-content">
              <h3>Doha, Qatar</h3>
              <p>Flights + Hotel Stay | 4 Nights</p>
              <a href="#" className="book-btn">BOOK NOW</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;