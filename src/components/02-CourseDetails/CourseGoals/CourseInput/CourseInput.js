import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

export const CourseInput = (props) => {
  const [goals, setGoals] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.trim().length > 0) {
      setIsValid(true);
    }
    setGoals(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goals.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(goals);
    setGoals("");
  };

  const classes = `${styles["form-control"]} ${!isValid && styles.invalid}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes}>
        <label>Course Goal</label>
        <input value={goals} type="text" onChange={handleInputChange} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
