import React from "react";
import whyusRight from "../images/whyus-right.png";
import whyusLeft from "../images/whyus-left.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import globePNG from "../images/rb_83217.png";
import sickPNG from "../images/rb_2148478446.png";
import doctorPNG from "../images/rb_1618.png";
import peopleSickPNG from "../images/rb_64669.png" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBrain,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/Whyus.css";

function Whyus() {
  return (
    <>
      <div className="whyus-wrapper">
        <div className="whyus-container">
          <div className="whyus-boxes">
            <div className="whyus-box-left">
              <div className="whyus-texts">
                <div className="whyus-text">
                  Finding a good doctor feels like a never-ending search.
                </div>
                <div className="whyus-text">
                  Hours wasted waiting for a single appointment.
                </div>
                <div className="whyus-text">
                  In emergencies, help often comes too late.
                </div>
              </div>
              <div className="whyus-image-left">
                <img src={whyusLeft} alt="problem-img" />
              </div>
            </div>
            <div className="whyus-box-right">
              <div className="whyus-image">
                <img src={whyusRight} alt="problem-img" />
              </div>
              <div className="whyus-texts">
                <div className="whyus-text">
                  Confusing medical advice leaves us unsure and stressed.
                </div>
                <div className="whyus-text">
                  Managing follow-ups is a chaotic hassle.
                </div>
                <div className="whyus-text">
                  Healthcare shouldn’t feel this difficult.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-section" style={{ padding: "20px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="swiper-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-sections swiper1">
                  <div className="swiper-left">
                    <div className="swiper-text">
                      Every year, over 8 million people die due to lack of
                      timely access to quality healthcare.
                    </div>
                  </div>
                  <div className="swiper-right">
                    <img src={globePNG} alt="globe-vector" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-sections swiper2">
                  <div className="swiper-left">
                    <div className="swiper-text">
                      4 in 5 rural areas lack doctors, leaving millions without
                      timely healthcare.
                    </div>
                  </div>
                  <div className="swiper-right">
                    <img src={sickPNG} alt="globe-vector" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-sections swiper3">
                  <div className="swiper-left">
                    <div className="swiper-text">
                      Over 57% of medical personnel lack proper degrees,
                      committing fraud and risking patient safety.
                    </div>
                  </div>
                  <div className="swiper-right">
                    <img src={doctorPNG} style={{transform: "scale(1.2)"}} alt="globe-vector" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-sections swiper4">
                  <div className="swiper-left">
                    <div className="swiper-text">
                    70% of medical emergencies fails to receive timely care and leading to serious consequences.
                    </div>
                  </div>
                  <div className="swiper-right">
                    <img src={peopleSickPNG} style={{transform: "scaleX(1.25)" }}alt="globe-vector" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="colored-box">
        <h1 className="colored-box-content">
          What is the solution of all these problems that you face while Booking
          an appointment with the doctor?{" "}
          <span className="yellow-text">Here comes Decmeds for your help.</span>
        </h1>
      </div>
      <div className="youtube-container">
        <div className="youtube-video-container">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/lwTTUWZWy2c?si=9RVK9un8Hnb690IR&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <section class="services">
        <h1 style={{maxWidth: "65rem", height: "min-content", margin: "0 auto", fontSize: "36px", fontWeight: "600", padding: "10px 20px"}}>Say hello to Decmeds—your ultimate healthcare sidekick! Here’s what it brings to the table: 🚀</h1>
        <div class="service-item-container">
          <div class="service-item">
            <div class="bar"></div>
            <div class="item">
              <FontAwesomeIcon
                icon={faBolt}
                style={{
                  height: "80px",
                  width: "80px",
                  color: "transparent",
                  stroke: "#1034a6",
                  strokeWidth: "35",
                  paddingBottom: "18px",
                }}
              />
            </div>
            <h1>Quick Service</h1>
            <p>Get quick doctor to your home within 10 minutes.*</p>
          </div>
          <div class="service-item">
            <div class="bar"></div>
            <div class="item">
              <FontAwesomeIcon
                icon={faBrain}
                style={{
                  height: "80px",
                  width: "80px",
                  color: "transparent",
                  stroke: "#1034a6",
                  strokeWidth: "35",
                  paddingBottom: "18px",
                }}
              />
            </div>
            <h1>AI Support</h1>
            <p>Get quick health solutions and tips by our AI.</p>
          </div>
          <div class="service-item">
            <div class="bar"></div>
            <div class="item">
              <FontAwesomeIcon
                icon={faUserDoctor}
                style={{
                  height: "80px",
                  width: "80px",
                  color: "transparent",
                  stroke: "#1034a6",
                  strokeWidth: "30",
                  paddingBottom: "15px",
                }}
              />
            </div>
            <h1>Book Appointments</h1>
            <p>Book any doctor's appointment with one tap, stress-free.</p>
          </div>
        </div>
      </section>
      <div className="ai-info-container">
        <div className="ai-info-wrapper">
          <div className="ai-info-texts">
            <div className="ai-info-text">
              Use our smart AI, <span className="blue-text">DecBuddy</span>,
              trained on{" "}
              <span className="yellow-text">
                13 billion well-researched data points
              </span>{" "}
              to answer your questions{" "}
              <span className="blue-text">confidently</span> and{" "}
              <span className="blue-text">provide quick</span>,
              <span className="blue-text"> free solutions</span>.
            </div>
            <p style={{color: "rgb(171, 171, 171)", padding: "20px 0 0"}}>*For specific areas currently. We will reach to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
