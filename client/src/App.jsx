/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Herosection from "./components/hero-section/hero-section.component";
import Navbar from "./components/navbar/navbar.component";
import CourseCard from "./components/card/card.component";
import { data } from "./test-data/data.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      {data.map((item, i) => (
        <CourseCard
          image={item.thumbnail}
          name={item.name}
          description={item.description}
          instructor={item.instructor}
          tags={item.tags}
          link={item.link}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
