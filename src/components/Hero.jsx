import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import gifLogo from "../images/logo-gif.mp4";
import "./css/Hero.css";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="hero-section">
        <section className="hero" id="hero">
          <div className="max-width">
            <div className="home-content">
              <h1 className="text-1">
                Get Quick{" "}
                <span className="text-animation blue-text">10 mins Appointment</span>
                <div className="csshape csshape_4"></div>
              </h1>
              <div className="text-2">
                <h1 className="text-ai">
                  And Also Get <p className="blue-text">AI-Backed Expertise</p>
                </h1>
              </div>
              <p className="text-home">
                Why Wait? Bring Intelligent Care Right to Your Fingertips!
                Download <span className="blue-text text-600">Decmeds</span> Now
                for{" "}
                <span className="blue-text text-600">
                  Instant Health Solutions
                </span>{" "}
                and{" "}
                <span className="blue-text text-600">
                  Easy Doctor Appointments
                </span>{" "}
                – Anytime, Ane!
              </p>
              <div className="home-btn-box">
                <a href="https://" className="home-btn text-600">
                  Download Now &nbsp;
                  <span className="arrow-right">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{background:"#dde5ff",}}>
        <div className="maxContainer">
          <div className="boxContainer">
            <div className="textContainer">
              <div className="iconStyle">
                <FontAwesomeIcon icon={faPaperclip} />
              </div>
              {isMobile ? (
                <span>
                  Can you analyze my recent lab results and provide insights?
                </span>
              ) : (
                <Typewriter
                  words={[
                    "Can you analyze my recent lab results and provide insights?",
                    "What lifestyle changes could improve my condition?",
                    "What are some daily wellness routines I could follow to stay healthy?",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                />
              )}
            </div>
            <div>
              <video className="gifStyle" autoPlay muted loop>
                <source src={gifLogo} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
