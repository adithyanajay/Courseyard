import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
