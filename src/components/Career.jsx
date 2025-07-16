import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import offlineImage from "../images/offline-image.png";
import "./css/Career.css";

function Career() {

  return (
    <div className="career-section">
      <div className="max-width">
        <div className="career-header">
          <h1>Join Our <span className="blue-text">Mission</span></h1>
          <p className="career-subtitle">
            Be part of a team that's revolutionizing healthcare technology
          </p>
        </div>

        <div className="career-status">
          <div className="status-card">
            <div className="status-image">
              <img src={offlineImage} alt="Currently Not Hiring" />
            </div>
            <div className="status-content">
              <h2>We're Currently Not Hiring</h2>
              <p>
                While we're not actively recruiting at the moment, we're always interested 
                in connecting with talented individuals who share our passion for healthcare innovation.
              </p>
              <div className="status-info">
                <FontAwesomeIcon icon={faClock} className="status-icon" />
                <span>We'll be expanding our team soon. Stay tuned!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
