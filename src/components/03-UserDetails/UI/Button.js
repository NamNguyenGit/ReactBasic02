import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  const { children, type, onClick } = props;

  return (
    <button type={type || ""} onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
}
