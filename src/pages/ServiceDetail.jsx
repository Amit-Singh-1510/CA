import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <div className="service-detail-page">
      <div className="container">
        <div className="service-detail-layout">
          {/* Main Content Area */}
          <div className="service-content">
            <motion.h1 
              className="service-detail-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.title}
            </motion.h1>

            <div className="service-info-grid">
              {/* Advantages */}
              <motion.div 
                className="info-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="section-heading">Advantages</h3>
                <ul className="custom-list">
                  {service.advantages.map((adv, index) => (
                    <li key={index}>
                      <span className="check-circle"><CheckCircle size={20} /></span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Eligibility */}
              <motion.div 
                className="info-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="section-heading">Eligibility</h3>
                <ul className="custom-list">
                  {service.eligibility.map((elig, index) => (
                    <li key={index}>
                      <span className="check-circle"><CheckCircle size={20} /></span>
                      <span>{elig}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Rating and Consult Row */}
            <motion.div 
              className="action-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-consult">
                  Consult Now <ArrowRight size={18} className="arrow-icon" />
                </Link>
              </motion.div>
              
              <div className="rating-block">
                <span className="rating-score">4.6</span>
                <div className="stars">
                  <Star size={18} fill="#F59E0B" color="#F59E0B" />
                  <Star size={18} fill="#F59E0B" color="#F59E0B" />
                  <Star size={18} fill="#F59E0B" color="#F59E0B" />
                  <Star size={18} fill="#F59E0B" color="#F59E0B" />
                  <Star size={18} fill="#F59E0B" color="#F59E0B" />
                </div>
                <span className="rating-count">101 rating</span>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area - Form */}
          <motion.div 
            className="service-sidebar"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="consultation-form-card">
              <h3>Get a Consultation by Expert</h3>
              <form className="service-form">
                <div className="form-group-line">
                  <input type="text" placeholder="Name*" required />
                </div>
                <div className="form-group-line">
                  <input type="email" placeholder="Email *" required />
                </div>
                <div className="form-group-line">
                  <input type="tel" placeholder="Phone *" required />
                </div>
                <div className="form-group-line">
                  <input type="text" placeholder={`Query about ${service.title}*`} required />
                </div>
                <motion.button 
                  type="submit" 
                  className="btn-submit-green"
                  whileHover={{ scale: 1.02, backgroundColor: "#2F855A" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
