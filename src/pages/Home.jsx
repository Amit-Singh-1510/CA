import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, CheckCircle, Clock, Users, Building, FileText, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, duration: 0.8 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, duration: 0.8 } }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Architecting Your Financial Success</h1>
            <p className="hero-subtitle">
              Expert Chartered Accountants providing strategic corporate advice, compliance, and wealth management solutions.
            </p>
            <div className="hero-ctas">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-accent">Book a Free Consultation</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="#" className="btn-outline hero-btn-outline">View Portfolio</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="stats-bar">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="stat-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <h2 className="stat-number">15+</h2>
              <p className="stat-label">Years Experience</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <h2 className="stat-number">500+</h2>
              <p className="stat-label">Corporate Clients</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <h2 className="stat-number">10k+</h2>
              <p className="stat-label">Cases Resolved</p>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp} whileHover={{ y: -5 }}>
              <h2 className="stat-number">99%</h2>
              <p className="stat-label">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-desc">Comprehensive financial and legal solutions tailored to your business needs.</p>
          </div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="service-card" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="service-icon"><Building size={32} /></div>
              <h3>Business Registration</h3>
              <p>End-to-end support for incorporating private limited, LLP, and section 8 companies with full compliance.</p>
              <Link to="#" className="service-link">Learn more <ChevronRight size={16} /></Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="service-icon"><FileText size={32} /></div>
              <h3>Licenses & Compliance</h3>
              <p>Seamless management of GST returns, trademark registrations, and annual ROC compliances.</p>
              <Link to="#" className="service-link">Learn more <ChevronRight size={16} /></Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="service-icon"><TrendingUp size={32} /></div>
              <h3>Audit & Tax</h3>
              <p>Rigorous internal audits, statutory audits, and strategic income tax planning for maximum efficiency.</p>
              <Link to="#" className="service-link">Learn more <ChevronRight size={16} /></Link>
            </motion.div>

            <motion.div className="service-card" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Corporate Strategy</h3>
              <p>Virtual CFO services, financial modeling, and growth forecasting to transform your business.</p>
              <Link to="#" className="service-link">Learn more <ChevronRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <div className="why-us-grid">
            <motion.div 
              className="why-us-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team meeting" />
            </motion.div>

            <motion.div 
              className="why-us-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Built on Integrity, Precision, and Partnership</h2>
              <p className="section-desc">We don't just crunch numbers; we engineer growth. Our proactive approach ensures you stay ahead of complex regulations while maximizing profitability.</p>
              
              <ul className="why-us-list">
                <li>
                  <CheckCircle className="check-icon" size={24} />
                  <div>
                    <h4>Unmatched Precision</h4>
                    <p>Accuracy is our baseline. Strategic foresight is our added value.</p>
                  </div>
                </li>
                <li>
                  <Clock className="check-icon" size={24} />
                  <div>
                    <h4>Timely Delivery</h4>
                    <p>Prompt resolution of compliances avoiding steep penalties.</p>
                  </div>
                </li>
                <li>
                  <Users className="check-icon" size={24} />
                  <div>
                    <h4>Dedicated Partnership</h4>
                    <p>You get an advisory partner, not just an external consultant.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section text-center">
        <div className="container">
          <h2 className="section-title">Built on Proven Success</h2>
          <p className="section-desc text-center">What our esteemed clients say about us.</p>
          
          <motion.div 
            className="testimonial-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="testimonial-card" variants={scaleUp} whileHover={{ scale: 1.02 }}>
              <div className="quote-mark">"</div>
              <p className="testimonial-text">"Sarda Abhishek & Associates single-handedly streamlined our complex international tax restructuring. Their insights saved us millions and ensured 100% compliance."</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Jenkins</h4>
                  <p>CEO, TechCorp Global</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={scaleUp} whileHover={{ scale: 1.02 }}>
              <div className="quote-mark">"</div>
              <p className="testimonial-text">"From incorporating our startup to acting as our Virtual CFO, their dedicated team has been instrumental in our rapid scaling phase."</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Rajiv Mehrotra</h4>
                  <p>Founder, NextGen Innovators</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <h2>Ready to Architect Your Success?</h2>
          <p>Let’s build a solid financial foundation for your enterprise today.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="btn-accent cta-btn">
              Schedule Your Strategy Session <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
