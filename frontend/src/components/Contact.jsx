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
          <span className="eyebrow">Get in touch</span>
          <h2>We're here to help</h2>
          <p>
            Call us for emergencies or fill out the form — we'll respond within
            2 hours with a clear quote.
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
              hello@flowwarm.com
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
              <label htmlFor="name">Full name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Repair">Repair & Maintenance</option>
                <option value="Drain">Drain & Sewer Cleaning</option>
                <option value="Installation">Installation</option>
                <option value="Emergency">Emergency Service</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell us about your plumbing issue</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the problem, location, and urgency..."
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
