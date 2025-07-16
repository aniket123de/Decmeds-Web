import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch, faPhone, faEnvelope, faHospital, faRocket, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import "./css/Location.css";

function Location() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    {
      id: 1,
      name: "Mumbai",
      state: "Maharashtra",
      coordinates: { lat: 19.0760, lng: 72.8777 },
      clinics: 25,
      doctors: 150,
      phone: "+91 22 1234 5678",
      email: "mumbai@decmeds.com"
    },
    {
      id: 2,
      name: "Delhi",
      state: "Delhi",
      coordinates: { lat: 28.6139, lng: 77.2090 },
      clinics: 30,
      doctors: 180,
      phone: "+91 11 1234 5678",
      email: "delhi@decmeds.com"
    },
    {
      id: 3,
      name: "Bangalore",
      state: "Karnataka",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      clinics: 20,
      doctors: 120,
      phone: "+91 80 1234 5678",
      email: "bangalore@decmeds.com"
    },
    {
      id: 4,
      name: "Chennai",
      state: "Tamil Nadu",
      coordinates: { lat: 13.0827, lng: 80.2707 },
      clinics: 18,
      doctors: 100,
      phone: "+91 44 1234 5678",
      email: "chennai@decmeds.com"
    },
    {
      id: 5,
      name: "Hyderabad",
      state: "Telangana",
      coordinates: { lat: 17.3850, lng: 78.4867 },
      clinics: 15,
      doctors: 90,
      phone: "+91 40 1234 5678",
      email: "hyderabad@decmeds.com"
    },
    {
      id: 6,
      name: "Kolkata",
      state: "West Bengal",
      coordinates: { lat: 22.5726, lng: 88.3639 },
      clinics: 12,
      doctors: 80,
      phone: "+91 33 1234 5678",
      email: "kolkata@decmeds.com"
    },
    {
      id: 7,
      name: "Pune",
      state: "Maharashtra",
      coordinates: { lat: 18.5204, lng: 73.8567 },
      clinics: 14,
      doctors: 85,
      phone: "+91 20 1234 5678",
      email: "pune@decmeds.com"
    },
    {
      id: 8,
      name: "Ahmedabad",
      state: "Gujarat",
      coordinates: { lat: 23.0225, lng: 72.5714 },
      clinics: 10,
      doctors: 70,
      phone: "+91 79 1234 5678",
      email: "ahmedabad@decmeds.com"
    }
  ];

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pulseLocations, setPulseLocations] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setPulseLocations(prev => {
        const newLocations = [...prev, randomCity.id];
        return newLocations.slice(-3); // Keep only last 3 pulses
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="location-section">
      <div className="max-width">
        <div className="location-header">
          <h1>Our <span className="blue-text">Locations</span></h1>
          <p className="location-subtitle">
            Find Decmeds healthcare services in major cities across India
          </p>
        </div>

        <div className="search-container">
          <div className="search-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search cities or states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="locations-grid">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className={`location-card ${selectedCity === city.id ? 'selected' : ''} ${pulseLocations.includes(city.id) ? 'pulse' : ''}`}
              onClick={() => setSelectedCity(selectedCity === city.id ? null : city.id)}
            >
              <div className="location-marker">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="marker-icon" />
                <div className="pulse-ring"></div>
              </div>
              
              <div className="location-info">
                <h3>{city.name}</h3>
                <p className="state">{city.state}</p>
                
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">{city.clinics}</span>
                    <span className="stat-label">Clinics</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{city.doctors}</span>
                    <span className="stat-label">Doctors</span>
                  </div>
                </div>

                {selectedCity === city.id && (
                  <div className="contact-info">
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                      <span>{city.phone}</span>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                      <span>{city.email}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="location-features">
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faHospital} />
            </div>
            <h3>Premium Healthcare</h3>
            <p>State-of-the-art medical facilities in all major cities</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Quick Response</h3>
            <p>Emergency services available 24/7 across all locations</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <h3>Connected Network</h3>
            <p>Seamless healthcare coordination across multiple cities</p>
          </div>
        </div>

        <div className="coming-soon">
          <h2>Expanding <span className="blue-text">Nationwide</span></h2>
          <p>We're constantly growing our network to serve you better. More cities coming soon!</p>
          <div className="expansion-timeline">
            <div className="timeline-item">
              <div className="timeline-dot active"></div>
              <span>Metro Cities - Active</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot upcoming"></div>
              <span>Tier 2 Cities - Coming Soon</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot future"></div>
              <span>Rural Areas - Future</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
