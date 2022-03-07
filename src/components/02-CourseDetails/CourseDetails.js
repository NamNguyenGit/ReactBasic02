import React, { useState } from "react";
import { CourseInput } from "./CourseGoals/CourseInput/CourseInput";
import "./CourseDetails.css";
import { CourseList } from "./CourseGoals/CourseList/CourseList";
import Card from "./UI/Card/Card";

const initialCourseGoals = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Finish the course!", id: "g2" },
];

export default function CourseDetails() {
  const [courseGoals, setCourseGoals] = useState(initialCourseGoals);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <Card className="goal-container">
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </Card>
  );
}
