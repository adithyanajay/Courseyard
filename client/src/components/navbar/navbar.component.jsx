/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Switcher from "../switcher/switcher.component";
import "./navbar.styles.css";
import { MenuItems } from "./MenuItems";
import { Button } from "../Buttons/Buttons";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <div className="NavbarItems">
          <h1 className="navbar-logo">Courseyard</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Signup</Button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
