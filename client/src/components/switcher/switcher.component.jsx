import React, { useState, useEffect } from "react";
import "../darkmode.css";
import "../lightmode.css";
import "./switcher.styles.css";

const Switcher = () => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    localStorage.setItem("theme", checked ? "light" : "dark");
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    setChecked(!checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
        hidden="true"
      />
      <span className="slider round" />
      <div>
        <div className="shape sm"></div>
        <div className="shape sm"></div>
        <div className="shape md"></div>
        <div className="shape lg"></div>
      </div>
    </label>
  );
};

export default Switcher;
