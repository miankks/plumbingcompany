// --- src/components/Hero.jsx ---
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-texture"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          <i className="fas fa-wrench"></i> Licensierad och Försäkrad
        </div>
        <h1>
          VVS som <em>flödar</em> med varmt
        </h1>
        <p>
          Från läckande kranar till kompletta omrörningar – vi erbjuder expertkunskap, 
          ärliga priser och ett vänligt bemötande i varje jobb.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Se vårt arbete
          </a>
          <a href="#contact" className="btn btn-outline">
            Räddningstjänst
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">1,200+</div>
          <div className="hero-stat-label">Jobben slutförda</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">4.9★</div>
          <div className="hero-stat-label">Genomsnittligt betyg</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">18</div>
          <div className="hero-stat-label">År av förtroende</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
