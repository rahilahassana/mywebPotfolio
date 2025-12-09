import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force white background if on Contact page
  const isContactPage = location.pathname === '/contact';
  const navClass = scrolled || isContactPage ? 'scrolled' : '';

  return (
    <header className={navClass}>
      <nav>
        <Link to="/" className="logo">
          <i className="fa-solid fa-plane-up"></i>
          Apex Holidays
        </Link>
        <div className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
          <i className={`fa-solid ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><a href="/#trusted" onClick={() => setMenuActive(false)}>Holidays</a></li>
          <li><a href="/#deals" onClick={() => setMenuActive(false)}>Flights & Destinations</a></li>
          <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;