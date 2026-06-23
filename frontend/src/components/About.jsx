// --- src/components/About.jsx ---
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-image-stack">
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60"
            alt="Plumber at work"
          />
          <img
            className="about-img-accent"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=60"
            alt="Plumbing tools"
          />
          <div className="about-years-badge">
            18 <small>Years</small>
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">About FlowWarm</span>
          <h2>Plumbing you can trust, with a warm touch</h2>
          <p>
            We're a family-owned plumbing company dedicated to solving problems
            with honesty, skill, and a friendly smile. From emergency repairs to
            full installations, we treat every home like our own.
          </p>
          <p>
            Our team is licensed, insured, and trained in the latest techniques
            — but we never forget that behind every pipe is a person who needs
            clear answers and fair pricing.
          </p>
          <div className="about-values">
            <div className="about-value">
              <span className="about-value-dot"></span>
              Licensed & insured
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              Upfront pricing
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              Same-day service
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              100% satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
