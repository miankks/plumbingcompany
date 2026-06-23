// --- src/components/Services.jsx ---
import "./Services.css";

const services = [
  {
    icon: "fa-wrench",
    title: "Repairs & Maintenance",
    desc: "Fix leaks, drips, clogs, and broken fixtures with same-day service.",
  },
  {
    icon: "fa-pipe",
    title: "Drain & Sewer Cleaning",
    desc: "Hydro-jetting, camera inspections, and rooter services for clear pipes.",
  },
  {
    icon: "fa-shower",
    title: "Bathroom & Kitchen Plumbing",
    desc: "Installation of sinks, faucets, water heaters, and full remodels.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow">What we do</span>
          <h2>
            Plumbing with heart,
            <br />
            service with skill
          </h2>
          <p style={{ color: "#6B5D52" }}>
            From minor fixes to major installations — we treat your home like
            our own, with quality work and clear communication.
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
