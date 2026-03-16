import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo">A.G. <span>Leuterio</span></Link>
            <p style={{ marginTop: '1.5rem', opacity: 0.8 }}>Global Real Estate Leader, Founder of Filipino Homes, and 2024 International Realtor of the Year. Dedicated to empowering the next generation of real estate professionals.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><Music size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/coaching">Coaching Programs</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><Link to="/blog">Latest Content</Link></li>
              <li><Link to="/contact">Work With Us</Link></li>
              <li><a href="https://reviiai.com" target="_blank" rel="noopener noreferrer">Revii AI</a></li>
              <li><a href="https://reviicoaching.com" target="_blank" rel="noopener noreferrer">Revii Coaching</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul className="footer-links">
              <li><Link to="/biography">Biography</Link></li>
              <li><Link to="/our-mission">Our Mission</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Info</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/coaching-faq">Coaching FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anthony Gerard Orais Leuterio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
