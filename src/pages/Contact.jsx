import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Let's Build Your Financial Legacy</h1>
            <p>Connect with our top-tier consultants to navigate your business challenges.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content section">
        <div className="container">
          {/* Contact Cards */}
          <div className="contact-cards">
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="info-icon"><Phone size={28} /></div>
              <h3>Call Us</h3>
              <p>Mon - Fri, 9am - 6pm EST</p>
              <a href="tel:+1234567890" className="info-link">+1 (234) 567-890</a>
            </motion.div>

            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="info-icon"><Mail size={28} /></div>
              <h3>Email Us</h3>
              <p>We'll respond within 24 hours</p>
              <a href="mailto:info@financialarchitect.com" className="info-link">info@financialarchitect.com</a>
            </motion.div>

            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="info-icon"><MapPin size={28} /></div>
              <h3>Visit Office</h3>
              <p>Schedule an in-person meeting</p>
              <address className="info-link">123 Financial District, NY</address>
            </motion.div>
          </div>

          <div className="contact-grid">
            {/* Interactive Map */}
            <motion.div 
              className="contact-map"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="map-placeholder">
                <iframe 
                  src="https://maps.google.com/maps?q=26.703607605766948,88.41976890751017&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Consultation Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Request a Consultation</h2>
              <p>Fill out the form below and we will get back to you shortly.</p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" rows="5" placeholder="Briefly describe your requirements..." required></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  className="btn-accent submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <motion.a 
        href="https://wa.me/1234567890" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={30} />
      </motion.a>
    </div>
  );
};

export default Contact;
