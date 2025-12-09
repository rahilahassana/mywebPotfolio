import React from 'react';

const Footer = () => {
  return (
    <footer id="contact-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo">
            <i className="fa-solid fa-plane-up" style={{color:'var(--accent)'}}></i> Apex Holidays
          </div>
          <p style={{marginTop:'15px', color:'#bbb'}}>Your trusted partner for exploring the world's most beautiful destinations.</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Flight Deals</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fa-solid fa-phone"></i> +44 20 1234 5678</li>
            <li><i className="fa-solid fa-envelope"></i> info@apexholidays.com</li>
            <li><i className="fa-solid fa-location-dot"></i> 123 Travel Lane, London, UK</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        &copy; 2023 Apex Holidays. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;