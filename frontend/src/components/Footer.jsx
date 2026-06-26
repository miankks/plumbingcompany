// --- src/components/Footer.jsx ---
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>
            <span>✦</span> Faustina
          </h3>
          <p>
            Expert VVS med en varm touch — betjänar hem och företag med integritet och skicklighet.
          </p>
        </div>
        <div className="footer-col">
          <h4>Snabblänkar</h4>
          <ul>
            <li>
              <a href="#services">Tjänster</a>
            </li>
            <li>
              <a href="#projects">Projekter</a>
            </li>
            <li>
              <a href="#about">Om</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a href="tel:+5557892026">(555) 789-2026</a>
            </li>
            <li>
              <a href="mailto:hello@Faustina.com">hello@Faustina.com</a>
            </li>
            <li>Stockholm, Stockholm</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Faustina VVS. Alla rättigheter reserverade.</p>
      </div>
    </footer>
  );
};

export default Footer;
