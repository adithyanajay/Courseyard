import React from "react";
import { Grid } from "@material-ui/core";
import "./hero-section.styles.css";

const HeroSection = () => (
  <div className="hero">
    <Grid container spacing={3} justify="space-between" alignItems="center">
      <Grid item md={6} sm={12}>
        <div>
          <div className="hero-title">
            <span className="title">
              A Handpicked Collection Of The Best Free Learning Resources On The Planet{" "}
              <span role="img" aria-label="earth" className="earth">
                🌏
              </span>
              {"."}
            </span>
            <h6 className="credits">
              Made with{" "}
              <span className="love" aria-label="love" style={{ color: "red" }}>
                ❤
              </span>{" "}
              by Team Coffee
            </h6>
          </div>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <div>
          <img
            className="hero-img"
            alt=""
            src="https://cdn.devdojo.com/images/september2020/grow-together.png"
            height="350"
          />
        </div>
      </Grid>
    </Grid>
  </div>
);

export default HeroSection;
