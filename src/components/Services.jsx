import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/Services.css";

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTileClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Where can I register my complaint?",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, exercitationem?",
      items: ["Interface Design", "Creating Design Systems", "UI Kits", "User Experience Development"],
    },
    {
      title: "How quickly can I get assistance in case of a medical emergency?",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, exercitationem?",
      items: ["Interface Design", "Creating Design Systems", "UI Kits", "User Experience Development"],
    },
    {
      title: "Are the doctors on Decmeds verified?",
      description: "Doctor's on decmeds are verified throughly, every doctor registered on decmeds are well known and they posses a good degree",
      items: [],
    },
    {
      title: "Are there any hidden charges for booking appointments?",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, exercitationem?",
      items: ["Interface Design", "Creating Design Systems", "UI Kits", "User Experience Development"],
    },
  ];

  return (
    <div className="service-container">
      <div className="service-wrapper">
        <div className="service-content">
          <p className="title">Our Services</p>
          <h3>
            Solution We <br /> Provide.
          </h3>
          <p>
          At Decmeds, we value transparency and aim to make healthcare access seamless. This FAQ section addresses your key questions. If you have more queries, click the button below—we’re here to help and will get back to you as soon as possible!
          </p>
          <div className="service-buttons">
            <button>‎ ‎ ‎ </button>
            <button>Click Here</button>
          </div>
        </div>
        <div className="service-contaner">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service service-tiles ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleTileClick(index)}
            >
              <div className="service-title">
                <h2 className={activeIndex === index ? "ActiveHeading" : ""}>{service.title}</h2>
                <i>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="service-icon"
                    style={{ transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
                  />
                </i>
              </div>
              <div
                className={`service-description ${activeIndex === index ? "ActiveDescription" : ""}`}
              >
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;