import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import googleStartup from "../images/googleforstartups.jpg";
import microsoftStartup from "../images/logo_microsoft_for_startups.png";
import nvidiaStartup from "../images/nvidia-inception-program.jpg";
import bgImage from "../images/features-download-bg.png";
import "./css/Features.css";

function Features() {
  return (
    <div className="myStyle">
      <div className="movingTextWrapper">
        <div className="movingText">
          <span className="movingTextSpan">
            Fueled by the elite giants of the industry, setting a new benchmark
            in excellence.
          </span>
        </div>
        <div className="movingText">
          <span className="movingTextSpan movingTextSpan2">
            Fueled by the elite giants of the industry, setting a new benchmark
            in excellence.
          </span>
        </div>
      </div>
      <div className="maxContainer">
        <div className="investors-wrapper">
          <div className="investors-container">
          <img src={googleStartup} className="google-startup" alt="google-for-startup" />
          <img src={nvidiaStartup} className="nvidia-startup" alt="nvidia-for-startup" />
          <img src={microsoftStartup} className="microsoft-startup" alt="microsoft-for-startup" />
          </div>
        </div>
      </div>
      <div className="maxContainer" style={{ marginTop: "40px" }}>
        <div
          className="downloadBoxContainer"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="csshape csshape_1"></div>
          <div className="csshape csshape_2"></div>
          <div className="csshape csshape_3"></div>
          <h1 className="downloadBoxContainerh1">
            Discover the power of{"  "}
            <em>Decmeds</em> – try our app today!
          </h1>
          <button className="downloadButton">
            Download Now &nbsp;
            <FontAwesomeIcon className="icon" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
