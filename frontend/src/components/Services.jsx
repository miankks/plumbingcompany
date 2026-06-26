// --- src/components/Services.jsx ---
import "./Services.css";

const services = [
  {
    icon: "fa-wrench",
    title: "Reparationer & Underhåll",
    desc: "Laga läckor, dropp, stopp och trasiga armaturer med service samma dag.",
  },
  {
    icon: "fa-pipe",
    title: "Avloppsrensning",
    desc: "Hydrojetting, kamerainspektioner och rotborttagning för rena rör.",
  },
  {
    icon: "fa-shower",
    title: "Badrums- och köksrör",
    desc: "Installation av handfat, kranar, varmvattenberedare och fullständiga renoveringar.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow">Vad vi gör</span>
          <h2>
            VVS med hjärta,
            <br />
            service med skicklighet
          </h2>
          <p style={{ color: "#6B5D52" }}>
            Från mindre reparationer till större installationer – vi behandlar ditt hem som vårt eget,
            med kvalitetsarbete och tydlig kommunikation.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
