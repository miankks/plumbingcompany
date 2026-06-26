// --- src/components/Contact.jsx ---
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow">Hör av dig</span>
          <h2>Vi är här för att hjälpa till</h2>
          <p>
            Ring oss vid nödsituationer eller fyll i formuläret – 
            vi svarar inom 2 timmar med en tydlig offert.
          </p>
          <ul className="contact-details">
            <li>
              <span className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              (072) 123456
            </li>
            <li>
              <span className="contact-icon">
                <i className="fas fa-envelope"></i>
              </span>
              hello@Faustina.com
            </li>
            <li>
              <span className="contact-icon">
                <i className="fas fa-map-pin"></i>
              </span>
              Stockholm Stockholm
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Fullständigt namn</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-post</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service behövs</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Välj en tjänst</option>
                <option value="Repair">Reparation & Underhåll</option>
                <option value="Drain">Avloppsrensning</option>
                <option value="Installation">Installation</option>
                <option value="Emergency">Räddningstjänst</option>
                <option value="Other">Andra</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Berätta om ditt VVS-problem</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Beskriv problemet, platsen och brådskan..."
            ></textarea>
          </div>
          <button type="submit" className="form-submit" disabled={submitted}>
            {submitted ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
