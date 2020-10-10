import React from "react";
import "./App.css";
import headerimage from "./assets/courseyard-banner.png";

const Header=()=>{
  return (
    <div className="header">
      <img className="header-banner" src={headerimage} alt="courseyard-banner" />
    </div>
  )
  
}

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
