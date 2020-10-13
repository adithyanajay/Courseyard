/* eslint-disable no-unused-vars */
import React from "react";
import Switcher from "../switcher/switcher.component";
import "./navbar.styles.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Navbar = (props) => (
  <React.Fragment>
    <AppBar
      style={{ background: "var(--background-color-nav)", boxShadow: "var(--box-shadow-nav)" }}
      position="sticky"
    >
      <Toolbar>
        <Typography variant="h6">
          <div
            style={{
              backgroundImage: "var(--banner)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "60px",
              width: "250px",
            }}
          ></div>
        </Typography>
        <Button style={{ marginLeft: "auto" }}>
          <Switcher />
        </Button>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navbar;
