import React from "react";
import offlineImage from "../images/offline-image.png";

function Offline() {
  const offlineStyle = {
    maxWidth: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "0",
    padding: "0",
    alignItems: "center",
    justifyContent  : "center",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const imageStyle = {
    width: "300px",
    height: "300px",
  };

  const offlineh1 = {
    fontSize: "36px",
  };

  const pOffline = {
    color: "#1034a6",
  }

  return (
    <div style={offlineStyle}>
      <img style={imageStyle} src={offlineImage} alt="offline-image" />
      <h1 style={offlineh1}>Sorry! You are offline</h1>
      <p style={pOffline}>Check Your Connection and Retry!😃</p>
    </div>
  );
}

export default Offline;
