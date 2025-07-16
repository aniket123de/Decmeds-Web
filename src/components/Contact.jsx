import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Contact.css";

function Contact() {
  return (
    <div className="contact-body">
      <section className="contactWrapper">
        <form action="#" className="contact-form">
          <div className="form-top-row">
            <div className="form-field">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" required />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" required />
            </div>
          </div>
          
          <div className="form-top-row">
            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" required />
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" required />
            </div>
          </div>
          
          <div className="form-bottom-row">
            <div className="form-message-field">
              <label>Message</label>
              <textarea placeholder="Write your message" required></textarea>
            </div>
            <button className="form-send-btn" type="submit">
              Send
            </button>
          </div>
        </form>

        <div className="contact-row">
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="company-info">
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <span>
                Eco Space Business Park Premises, Block 4a, 3rd Floor, New Town
                Action Area II, Rajarhat, New Town Kolkata, Chakpachuria, West
                Bengal, India, 700156
              </span>
            </div>
            <div className="company-info">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <span style={{fontSize: "16px", flexWrap: "wrap",}}>support@decmeds.com</span>
            </div>
            <div className="company-info">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <span>1800 5678 8000</span>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.820720801445!2d88.48742457385026!3d22.58580763248894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020ac6499c8499%3A0x17c545e20b241d8d!2sEcospace%20Business%20Park!5e0!3m2!1sen!2sin!4v1733939571593!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
