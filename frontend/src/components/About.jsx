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
          <span className="eyebrow">Om Faustina</span>
          <h2>Rörmokeri du kan lita på, med en varm touch</h2>
          <p>
            Vi är ett familjeägt VVS-företag som är dedikerat till att lösa problem med ärlighet, 
            skicklighet och ett vänligt leende. Från akuta reparationer till 
            fullständiga installationer behandlar vi varje hem som vårt eget.
          </p>
          <p>
           Vårt team är licensierat, försäkrat och utbildat i de senaste teknikerna
            — men vi glömmer aldrig att bakom varje rör finns en person som behöver tydliga
           svar och rättvisa priser.
          </p>
          <div className="about-values">
            <div className="about-value">
              <span className="about-value-dot"></span>
              Licensierad & försäkrad
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              Prissättning i förskott
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              Service samma dag
            </div>
            <div className="about-value">
              <span className="about-value-dot"></span>
              100% tillfredsställelse
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
