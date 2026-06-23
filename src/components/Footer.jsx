// --- src/components/Footer.jsx ---
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <span
            className="logo"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem",
            }}
          >
            <i
              className="fas fa-hammer"
              style={{ color: "#b87c5a", marginRight: "8px" }}
            ></i>
            BuildWarm
          </span>
          <p style={{ marginTop: "0.5rem", color: "#bdaa9b" }}>
            © 2026 — warm renovations
          </p>
        </div>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
