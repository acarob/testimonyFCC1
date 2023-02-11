import React from "react";

function Testimony() {
  return (
    <div className="testimony-container">
      <img
        className="testimony-image"
        src={require("../images/im3.png")}
        alt="Emma's picture"
      />
      <div className="container-testimony-text">
        <p className="testimony-name">Emma Bostian in Sweden</p>
        <p className="testimony-charge">Software Engineer at Spotify</p>
        <p className="testimony-text">
          "I've always struggled with learning JavaScript. I've taken many
          courses but freeCodeCamp's course was the one which stuck. Studying
          JavaScript as well as data structures and algorithms on freeCodeCamp
          gave me the skills and confidence I needed to land my dream job as a
          software engineer at Spotify."
        </p>
      </div>
    </div>
  );
}

export default Testimony;
