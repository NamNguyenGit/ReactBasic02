import React from "react";
import "./CourseItem.css";

export default function CourseItem(props) {
  const { id, onDelete, children } = props;

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
}
