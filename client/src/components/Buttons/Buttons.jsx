/* eslint-disable react/prop-types */
import React from "react";
import "./Buttons.css";

const styles = ["btn--primary", "btn-outline"];

const sizes = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
  return (
    <div
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </div>
  );
};

export default Button;
