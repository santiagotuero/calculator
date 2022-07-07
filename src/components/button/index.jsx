import "./styles.css";
import React from "react";

const Button = ({ children, handleClick }) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <button
      className={`button-container ${isOperator(children) ? "operator" : null}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  );
};

export default Button;
