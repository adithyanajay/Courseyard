/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import CourseCard from "./components/Card";
import { data } from "./test-data/data.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <CourseCard
        image={data[0].thumbnail}
        name={data[0].name}
        description={data[0].description}
        instructor={data[0].instructor}
        tags={data[0].tags}
        link={data[0].link}
      />
    </div>
  );
}

export default App;
