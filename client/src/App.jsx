/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Herosection from "./components/hero-section/hero-section.component";
import Navbar from "./components/navbar/navbar.component";
import CardPreview from "./components/cards-preview/cards-preview.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <CardPreview />
    </div>
  );
}

export default App;
