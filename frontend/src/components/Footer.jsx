// --- src/components/Footer.jsx ---
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>
            <span>✦</span> FlowWarm
          </h3>
          <p>
            Expert plumbing with a warm touch — serving homes and businesses
            with integrity and skill.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+5557892026">(555) 789-2026</a>
            </li>
            <li>
              <a href="mailto:hello@flowwarm.com">hello@flowwarm.com</a>
            </li>
            <li>456 Maple Avenue, Austin, TX</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 FlowWarm Plumbing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
