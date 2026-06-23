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
          <i className="fas fa-wrench"></i> Licensed & insured
        </div>
        <h1>
          Plumbing that <em>flows</em> with warmth
        </h1>
        <p>
          From leaky faucets to full repipes — we bring expert craftsmanship,
          honest pricing, and a friendly touch to every job.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See our work
          </a>
          <a href="#contact" className="btn btn-outline">
            Emergency service
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">1,200+</div>
          <div className="hero-stat-label">Jobs completed</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">4.9★</div>
          <div className="hero-stat-label">Average rating</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">18</div>
          <div className="hero-stat-label">Years of trust</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
