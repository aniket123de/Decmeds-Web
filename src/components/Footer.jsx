import React, { useEffect, useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo-white-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase-config";
import "./css/Footer.css";

const logoStyle = {
  height: "40px",
  width: "40px",
  borderRadius: "50%",
};

const particlesStyle = {
  position: "absolute",
  top: "0",
  left: "0",
};

function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState("success");
  const [dialogMessage, setDialogMessage] = useState("");
  const [progressWidth, setProgressWidth] = useState(100);

  const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,7}$/i;

  useEffect(() => {
    if (showDialog) {
      let progress = 100;
      const timer = setInterval(() => {
        progress -= 2;
        setProgressWidth(progress);
        if (progress <= 0) {
          clearInterval(timer);
          setShowDialog(false);
          setProgressWidth(100);
        }
      }, 60);
      return () => clearInterval(timer);
    }
  }, [showDialog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setDialogType("warning");
      setDialogMessage("Invalid Email id!");
      setShowDialog(true);
      return;
    } else {
      const db = getDatabase(firebaseApp);
      const dbRef = push(ref(db, "/subscribers"));
      set(dbRef, { email: email.trim() })
        .then(() => {
          console.log(email);
          setDialogType("success");
          setDialogMessage("Thanks, We Recieved it!");
          setShowDialog(true);
          setEmail("");
        })
        .catch((error) => {
          console.log(error);
          setDialogType("error");
          setDialogMessage("Failed! Please Retry");
          setShowDialog(true);
        });
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("effects");
    const footer = document.querySelector(".footer");

    const setCanvasSize = () => {
      canvas.width = footer.offsetWidth;
      canvas.height = footer.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const ctx = canvas.getContext("2d");
    const particles = [];

    function initParticles() {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1.3,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          color: "#0f2c8b",
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      }
      requestAnimationFrame(drawParticles);
    }

    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleError = (event) => {
      console.error("Resource failed to load:", event);
      setDialogType("error");
      setDialogMessage("Please check your connection.");
      setShowDialog(true);
    };

    const handleOffline = () => {
      setDialogType("error");
      setDialogMessage("Please check your connection.");
      setShowDialog(true);
    };

    window.addEventListener("error", handleError, true); // Captures resource errors
    window.addEventListener("offline", handleOffline); // Detects loss of connection

    return () => {
      window.removeEventListener("error", handleError, true);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="footer">
      <canvas id="effects" style={particlesStyle}></canvas>
      <footer>
        <div className="footer-container">
          <div className="footer-section about-us">
            <h3>
              <div className="logo">
                <img src={logo} style={logoStyle} alt="Decmeds" />
              </div>
              Decmeds
            </h3>
            <p>
              Get emergency consultations and easy bookings with your favorite
              doctors, all in one platform. Experience Health and Care, Beyond
              Compare!
            </p>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/company/decmedstechnologiespvtltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffffd8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffffd8"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    class="svg-inline--fa fa-facebook-f "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 412"
                    style={{ width: "16px" }}
                    fill="none"
                    stroke="#ffffffd8"
                    stroke-width="50"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section quicklinks">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="/raise-issue" onClick={scrollToTop}>Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms&conditions" onClick={scrollToTop}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <a href="https://">Our Story</a>
              </li>
            </ul>
          </div>
          <div className="footer-section quicklinks">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/why-us" onClick={scrollToTop}>Why Us?</Link>
              </li>
              <li>
                <Link to="/career" onClick={scrollToTop}>Career</Link>
              </li>
              <li>
                <Link to="/location" onClick={scrollToTop}>Locations</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-newsletter">
            <h3>Newsletter</h3>
            <ul className="newsletter">
              <li>
                <p>Get latest updates of Decmeds on your mails</p>
              </li>
              <li>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="footer-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="signbtn">
                    Send
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright-container">
        <div className="copyright-text">
          <p>
            Copyrights &#169;&nbsp;
            <a
              href="https://www.decmeds.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decmeds Technologies Pvt Ltd
            </a>
            , All Rights Reserved {currentYear}
          </p>
        </div>
      </div>
      {showDialog && (
        <div className={`dialog-box ${dialogType}`}>
          <div className="dialog-content">
            <div className="dialog-header">
              {dialogType === "success" && (
                <FontAwesomeIcon icon={faCircleCheck} className="dialog-icon success-icon" />
              )}
              {dialogType === "error" && (
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="dialog-icon error-icon"
                />
              )}
              {dialogType === "warning" && (
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="dialog-icon warning-icon"
                />
              )}
              <span className="dialog-message">{dialogMessage}</span>
            </div>
          </div>
          <div
            className="dialog-progress-bar"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Footer;
