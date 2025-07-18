import React, { useState } from "react";
import logo from "../images/logo.jpg";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuStyle = {
    maxHeight: menuOpen ? "300px" : "0",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a
              href="https://www.decmeds.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="Decmeds" />
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <input
              className="menu-icon__cheeckbox"
              type="checkbox"
              checked={menuOpen}
              readOnly
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div style={menuStyle} className="menu-items">
            <ul className="menu">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" onClick={scrollToTop}>Featur</Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>Connect</Link>
              </li>
            </ul>
            <div className="ai-btn font-15">
              <Link to="/chat-now">
                Chat Now &nbsp;
                <span className="arrow-right">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
