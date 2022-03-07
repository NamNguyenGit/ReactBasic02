import React from "react";
import "./Button.css";

export const Button = (props) => {
  const { type, children, onClick } = props;

  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};
