import React from "react";
import "../stylesheets/Testimony.css";

class Testimony extends React.Component {
  render() {
    return (
      <div className="testimony-container">
        <img
          className="testimony-image"
          src={require(`../images/im${this.props.image}.png`)}
          alt={`${this.props.name}`}
        />
        <div className="testimony-text-container">
          <p className="testimony-name">
            <strong>{this.props.name}</strong> in {this.props.country}
          </p>
          <p className="testimony-charge">
            {this.props.charge} at <strong>{this.props.enterprise}</strong>
          </p>
          <p className="testimony-text">
            "{this.props.testimony} <strong>{this.props.quote} </strong>
            {this.props.testimony2}"
          </p>
        </div>
      </div>
    );
  }
}

export default Testimony;
