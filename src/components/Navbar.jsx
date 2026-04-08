import { Link } from 'react-router-dom';
import { Mail, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-container">
          <div className="utility-contact">
            <a href="mailto:info@financialarchitect.com"><Mail size={16} /> info@financialarchitect.com</a>
            <a href="tel:+1234567890"><Phone size={16} /> +1 (234) 567-890</a>
          </div>
          <div className="utility-social">
            <a href="#"><FaFacebook size={16} /></a>
            <a href="#"><FaLinkedin size={16} /></a>
            <a href="#"><FaInstagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={closeDropdown}>
            Sarda Abhishek  <span>& Associates</span>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div 
              className={`dropdown mega-dropdown ${activeDropdown === 'start' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('start')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="dropdown-toggle">Start Business <ChevronDown size={16} /></button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-column">
                    <h4 className="mega-title">BUSINESS REGISTRATION</h4>
                    <Link to="/service/company-registration" onClick={closeDropdown}>Company Registration</Link>
                    <Link to="/service/private-limited-company" onClick={closeDropdown}>Private Limited Company Registration</Link>
                    <Link to="/service/public-limited-company" onClick={closeDropdown}>Public Limited Company Registration</Link>
                    <Link to="/service/limited-liability-partnership" onClick={closeDropdown}>Limited Liability Partnership Registration</Link>
                    <Link to="/service/one-person-company" onClick={closeDropdown}>One Person Company Registration</Link>
                    <Link to="/service/nidhi-company" onClick={closeDropdown}>Nidhi Company Registration</Link>
                    <Link to="/service/producer-company" onClick={closeDropdown}>Producer Company Registration</Link>
                    <Link to="/service/foreign-company" onClick={closeDropdown}>Foreign Company Registration</Link>
                    <Link to="/service/partnership-registration" onClick={closeDropdown}>Partnership Registration</Link>
                    <Link to="/service/sole-proprietorship" onClick={closeDropdown}>Sole Proprietorship Registration</Link>
                  </div>
                  <div className="mega-column">
                    <h4 className="mega-title">LICENSES</h4>
                    <Link to="/service/gst-registration" onClick={closeDropdown}>GST Registration</Link>
                    <Link to="/service/fssai-registration" onClick={closeDropdown}>FSSAI Registration</Link>
                    <Link to="/service/import-export-code" onClick={closeDropdown}>Import Export Code</Link>
                    <Link to="/service/iso-certification" onClick={closeDropdown}>ISO Certification</Link>
                    <Link to="/service/rera-registration" onClick={closeDropdown}>RERA Registration</Link>
                    <Link to="/service/msme-udyam" onClick={closeDropdown}>MSME Udyam Registration</Link>
                    <Link to="/service/shop-act-registration" onClick={closeDropdown}>Shop Act Registration</Link>
                    <Link to="/service/business-registration-number" onClick={closeDropdown}>Business Registration Number (BRN)</Link>
                    <Link to="/service/startup-registration" onClick={closeDropdown}>Startup Registration</Link>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`dropdown ${activeDropdown === 'ngo' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('ngo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="dropdown-toggle">NGO <ChevronDown size={16} /></button>
              <div className="dropdown-menu">
                <Link to="/service/ngo-registration" onClick={closeDropdown}>NGO Registration</Link>
                <Link to="/service/section-8-npo" onClick={closeDropdown}>Section 8 NPO Registration</Link>
                <Link to="/service/trust-registration" onClick={closeDropdown}>Trust Registration</Link>
                <Link to="/service/society-registration" onClick={closeDropdown}>Society Registration</Link>
                <Link to="/service/ngo-darpan" onClick={closeDropdown}>NGO Darpan Registration</Link>
                <Link to="/service/fcra-registration" onClick={closeDropdown}>FCRA Registration</Link>
                <Link to="/service/80g-12a-registration" onClick={closeDropdown}>80G 12A Registration</Link>
                <Link to="/service/csr-registration" onClick={closeDropdown}>Corporate Social Responsibility</Link>
              </div>
            </div>

            <div 
              className={`dropdown ${activeDropdown === 'trademark' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('trademark')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="dropdown-toggle">Trademark <ChevronDown size={16} /></button>
              <div className="dropdown-menu">
                <Link to="/service/trademark-registration" onClick={closeDropdown}>Trademark Registration</Link>
                <Link to="/service/copyright-registration" onClick={closeDropdown}>Copyright Registration</Link>
                <Link to="#" onClick={closeDropdown}>Patent Search</Link>
              </div>
            </div>

            <div 
              className={`dropdown mega-dropdown ${activeDropdown === 'compliances' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('compliances')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="dropdown-toggle">Compliances <ChevronDown size={16} /></button>
              <div className="dropdown-menu mega-menu" style={{ width: '900px' }}>
                <div className="mega-menu-content">
                  <div className="mega-column">
                    <h4 className="mega-title">FILING & RETURNS</h4>
                    <Link to="/service/itr-filing" onClick={closeDropdown}>ITR Filing</Link>
                    <Link to="/service/gst-return" onClick={closeDropdown}>GST Return</Link>
                    <Link to="/service/roc-filing" onClick={closeDropdown}>ROC Filing</Link>
                    <Link to="/service/tds-return" onClick={closeDropdown}>TDS Return</Link>
                    <Link to="/service/xbrl-filing" onClick={closeDropdown}>XBRL Filing</Link>
                  </div>
                  <div className="mega-column">
                    <h4 className="mega-title">AUDIT ASSURANCE</h4>
                    <Link to="/service/gst-audit" onClick={closeDropdown}>GST Audit</Link>
                    <Link to="/service/ngo-audit" onClick={closeDropdown}>NGO Audit</Link>
                    <Link to="/service/tax-audit" onClick={closeDropdown}>Tax Audit</Link>
                    <Link to="/service/stock-audit" onClick={closeDropdown}>Stock Audit</Link>
                    <Link to="/service/statutory-audit" onClick={closeDropdown}>Statutory Audit</Link>
                    <Link to="/service/bank-audit" onClick={closeDropdown}>Bank Audit</Link>
                  </div>
                  <div className="mega-column">
                    <h4 className="mega-title">ADVISORY CONSULTANCY</h4>
                    <Link to="/service/gst-advisory" onClick={closeDropdown}>GST Advisory</Link>
                    <Link to="/service/tax-planning" onClick={closeDropdown}>Tax Planning</Link>
                    <Link to="/service/legal-secretarial" onClick={closeDropdown}>Legal Secretarial</Link>
                    <Link to="/service/project-financing" onClick={closeDropdown}>Project Financing</Link>
                    <Link to="/service/nri-taxation" onClick={closeDropdown}>NRI Taxation</Link>
                    <Link to="/service/strike-off-section-8" onClick={closeDropdown}>Strike off Section-8 Company</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="#" className="nav-link" onClick={closeDropdown}>About</Link>
            <Link to="/contact" className="nav-link" onClick={closeDropdown}>Contact</Link>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
