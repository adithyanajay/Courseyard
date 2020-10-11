import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import headerimage from "./assets/courseyard-banner.png";

const Header = () => {
  return (
    <header className="navbar sticky-top navbar-light bg-white shadow-sm w-auto">
      <img className="header-img" src={headerimage} alt="courseyard-banner" height="20" />
    </header>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="first-row">
        <div className="hero-title container float-left">
          <span className="title" role="text">
            A handpicked collection of best free learning resources on the Planet{" "}
            <span role="img">🌎</span>, uh you can also say on the Universe{" "}
            <span role="img">😋</span>.
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
};

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
