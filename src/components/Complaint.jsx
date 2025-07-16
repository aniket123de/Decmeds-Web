import React, { useEffect } from "react";
import "./css/Complaint.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faIdCardClip,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import contactBG from "../images/contact-medical.mp4";

export default function Complaint() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".contact-input");

    inputs.forEach((ipt) => {
      ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
      });
      ipt.addEventListener("blur", () => {
        if (ipt.value === "") {
          ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
      });
    });

    // Cleanup to remove event listeners when the component unmounts
    return () => {
      inputs.forEach((ipt) => {
        ipt.removeEventListener("focus", () => {
          ipt.parentNode.classList.add("focus");
          ipt.parentNode.classList.add("not-empty");
        });
        ipt.removeEventListener("blur", () => {
          if (ipt.value === "") {
            ipt.parentNode.classList.remove("not-empty");
          }
          ipt.parentNode.classList.remove("focus");
        });
      });
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="form-wrapper hidden">
            <div className="contact-heading">
              <h1>
                Contact us here<span className="blue-text">.</span>
              </h1>
              <p className="text-contact-heading">
                Or reach us via :{" "}
                <a href="mailto: support@decmeds.com">support@decmeds.com</a>
              </p>
            </div>
            <form
              action="index.html"
              method="post"
              className="contact-form"
              netlify
            >
              <div className="input-wrap">
                <input
                  className="contact-input"
                  autocomplete="off"
                  name="First Name"
                  type="text"
                  required
                />
                <label>First Name</label>
                <FontAwesomeIcon icon={faIdCardClip} className="icon" />
              </div>
              <div className="input-wrap">
                <input
                  className="contact-input"
                  autocomplete="off"
                  name="Last Name"
                  type="text"
                  required
                />
                <label>Last Name</label>
                <FontAwesomeIcon icon={faIdCardClip} className="icon" />
              </div>
              <div className="input-wrap w-100">
                <input
                  className="contact-input"
                  autocomplete="off"
                  name="Email"
                  type="email"
                  required
                />
                <label>Email</label>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
              <div className="input-wrap textarea w-100">
                <textarea
                  name="Message"
                  autocomplete="off"
                  className="contact-input"
                  required
                ></textarea>
                <label>Message</label>
                <FontAwesomeIcon icon={faInbox} className="icon" />
              </div>
              <div className="contact-button">
                <input type="submit" value="Send Message" className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-right">
          <div className="img-wrapper">
            <video className="contact-bg" autoPlay muted loop>
              <source src={contactBG} />
            </video>
            {/* <img src="assets/images/contact-bg.jpg" className="contact-bg" /> */}
            <div className="contact-wave">
              <svg
                className="contact-wave-warp"
                viewBox="0 0 783 1536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="contact-wave"
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                />
              </svg>
            </div>
            <svg
              className="dashed-wave"
              viewBox="0 0 345 877"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="dashed-wave"
                d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
