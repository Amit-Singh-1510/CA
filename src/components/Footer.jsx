import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-heading">Business Registration</h4>
            <ul className="footer-links">
              <li><Link to="/service/private-limited-company">Private Limited Company Registration</Link></li>
              <li><Link to="/service/public-limited-company">Public Limited Company Registration</Link></li>
              <li><Link to="/service/one-person-company">One Person Company Registration</Link></li>
              <li><Link to="/service/company-registration">Company Registration</Link></li>
              <li><Link to="/service/foreign-company">Foreign Company Registration</Link></li>
            </ul>
          </motion.div>
          
          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-heading">Licenses</h4>
            <ul className="footer-links">
              <li><Link to="/service/gst-registration">GST Registration</Link></li>
              <li><Link to="/service/fssai-registration">FSSAI Registration</Link></li>
              <li><Link to="/service/msme-udyam">MSME Udyam Registration</Link></li>
              <li><Link to="/service/iso-certification">ISO Certification</Link></li>
              <li><Link to="/service/business-registration-number">Business Registration Number</Link></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={fadeInUp}>
            <h4 className="footer-heading">Audit & Tax</h4>
            <ul className="footer-links">
              <li><Link to="/service/ngo-audit">NGO Audit</Link></li>
              <li><Link to="/service/nri-taxation">NRI Taxation</Link></li>
              <li><Link to="/service/tds-return">TDS Return</Link></li>
              <li><Link to="/service/tax-audit">Tax Audit</Link></li>
              <li><Link to="/service/statutory-audit">Statutory Audit</Link></li>
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={fadeInUp}>
             <h4 className="footer-heading">Get Contact</h4>
            <ul className="footer-contact-simple">
              <li>Phone: +91-97853 12345</li>
              <li>E-mail: admin@cagmc.com</li>
              <li>Location: S4, Shree Gopal Nagar, Gopalpura Bypass, Jaipur-302019.</li>
            </ul>
            <div className="footer-social-simple">
              <a href="#"><FaFacebook size={18} /></a>
              <a href="#"><FaInstagram size={18} /></a>
              <a href="#"><FaLinkedin size={18} /></a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Sarda Abhishek & Associates. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
