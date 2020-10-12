import React, { Component } from "react";
import "./Herosection.css";

export class Herosection extends Component {
  render() {
    return (
      <div className="hero">
        <div className="first-row">
          <div className="hero-title">
            <span className="title" role="text">
              A Handpicked Collection Of The Best Free Learning Resources On The Planet{" "}
              <span role="img">🌏</span>.
            </span>
            <h6>Made with ❤ by Team Coffee</h6>
          </div>
        </div>
        <div>
          <img
            className="image float-right"
            src="https://cdn.devdojo.com/images/september2020/grow-together.png"
            height="350"
          />{" "}
        </div>
      </div>
    );
  }
}

export default Herosection;
