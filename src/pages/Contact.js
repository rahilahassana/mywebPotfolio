import React from 'react';

const Contact = () => {
  return (
    <section className="contact-page-wrapper">
      <div className="contact-container">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-content-grid">
          {/* Form Card */}
          <div className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="input-group">
                <textarea placeholder="Enter your message here..." rows="5"></textarea>
              </div>
              <button type="submit" className="submit-query-btn">SUBMIT QUERY</button>
            </form>
          </div>

          {/* Text Details */}
          <div className="contact-details-text">
            <div className="detail-block">
              <h3>Address</h3>
              <p>Office 11742 182-184 High Street North East Ham<br/>London E6 2JA</p>
            </div>
            
            <div className="detail-block">
              <h3>Call Us</h3>
              <p>+44 2038 921688</p>
            </div>

            <div className="detail-block">
              <h3>Mail Us</h3>
              <p>admin@apexholidays.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;