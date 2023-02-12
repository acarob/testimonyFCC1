import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="testimony-image"
        src={require(`../images/im${props.image}.png`)}
        alt="Emma's picture"
      />
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimony-charge">
          {props.charge} at <strong>{props.enterprise}</strong>
        </p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
