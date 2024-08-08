import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    setIsValid(name && email && message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      emailjs
        .sendForm(
          "service_145zxci",
          "template_aktbm99",
          e.target,
          "G0ipZQahtMuIcqPuR"
        )
        .then(
          (result) => {
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setError(
              "There was an error sending your message. Please try again later."
            );
          }
        );
    }
  };

  const handleMouseOver = (e) => {
    if (!isValid) {
      const button = e.target;
      button.classList.remove("slide-left", "slide-right");
      const randomDirection =
        Math.random() > 0.5 ? "slide-left" : "slide-right";
      button.classList.add(randomDirection);
    }
  };

  const handleMouseOut = (e) => {
    const button = e.target;
    button.classList.remove("slide-left", "slide-right");
  };

  return (
    <div className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:sreekanthgmasters@gmail.com">
            sreekanthgmasters@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+16025876760">+1 (602) 587-6760</a>
        </p>
        <p>
          <a
            href="http://www.linkedin.com/in/Srikanth-Ganji-09041996"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/GanjiSrikanthASU"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;GitHub
          </a>
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send a Message</h3>
        {isSubmitted && (
          <p className="success-message">Thank you for reaching out!</p>
        )}
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="send-button"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
