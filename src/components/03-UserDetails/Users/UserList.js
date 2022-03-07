import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

export const UserList = (props) => {
  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (props.users.length > 0) {
    content = props.users.map((user) => (
      <li>
        {user.name} ({user.age} years old)
      </li>
    ));
  }

  return (
    <Card className={classes.users}>
      <ul>{content}</ul>
    </Card>
  );
};
