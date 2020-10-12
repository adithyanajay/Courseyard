import React from "react";
import Switcher from "../switcher/switcher.component";

import bannerImg from "../../assets/courseyard-banner.png";
import "./navbar.styles.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Navbar = () => (
  <React.Fragment>
    <AppBar style={{ background: "var(--background-color-nav)" }} position="static">
      <Toolbar>
        <Typography variant="h6">
          <img src={bannerImg} height="65" />
        </Typography>
        <Button style={{ marginLeft: "auto" }}>
          <Switcher />
        </Button>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navbar;
