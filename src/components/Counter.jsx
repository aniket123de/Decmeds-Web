import React, { useState } from "react";
import "./css/Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faSmile,
  faUser,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="counter-cover">
        <section className="counter" id="counter">
          <div className="counter-max-container">
            <div className="counter-wrapper">
              <div className="counter-container">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span className="counter-num">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                </span>
                <span className="counter-text">Daily Users</span>
              </div>
              <div className="counter-container">
                <i>
                  <FontAwesomeIcon icon={faComputer} />
                </i>
                <span className="counter-num">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                </span>
                <span className="counter-text">AI Paramters</span>
              </div>
              <div className="counter-container">
                <i>
                  <FontAwesomeIcon icon={faUserDoctor} />
                </i>
                <span className="counter-num">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                </span>
                <span className="counter-text">Doctors</span>
              </div>
              <div className="counter-container">
                <i>
                  <FontAwesomeIcon icon={faSmile} />
                </i>
                <span className="counter-num">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                </span>
                <span className="counter-text">Happy Patients</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ScrollTrigger>
  );
}
