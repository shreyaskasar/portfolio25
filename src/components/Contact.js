import React, { useRef, useState } from "react";
import "./Contact.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_troutup",     // Your Service ID
        "template_3gl71w4",    // Your Template ID
        form.current,
        "YnuxvxzGS8VyjhvLR"   // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Page Heading */}
      <h1 className="contact-heading">
        <span className="get">GET IN</span>{" "}
        <span className="touch">TOUCH</span>
      </h1>

      {/* Main content: two columns */}
      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-left">
          <h2 className="contact-info-heading">Contact Information</h2>
          <div className="contact-cards">
            {/* Email */}
            <a
              href="mailto:shreyaskasar028@gmail.com"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-icon">
                <AiOutlineMail />
              </div>
              <div className="card-content">
                <h3>Email</h3>
                <p>shreyaskasar028@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919359433284" className="contact-card">
              <div className="card-icon">
                <FiPhone />
              </div>
              <div className="card-content">
                <h3>Phone</h3>
                <p>+91 9359423284</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreyas-kasar-302487329/"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-icon">
                <AiFillLinkedin />
              </div>
              <div className="card-content">
                <h3>LinkedIn</h3>
                <p>Connect on Linked</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <h2 className="form-heading">Send a message</h2>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
            <input type="hidden" name="to_name" value="Shreyas" />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
          {messageSent && (
            <p className="success-message">Your message has been sent!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
