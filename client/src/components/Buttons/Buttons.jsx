/* eslint-disable react/prop-types */
import React from "react";
import "./Buttons.css";

const Styles = ["btn--primary", "btn-outline"];

const Sizes = ["btn--medium", "btn--large"];

export const Button = ({ children, type, OnClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <div
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={OnClick}
      type={type}
    >
      {children}
    </div>
  );
};
