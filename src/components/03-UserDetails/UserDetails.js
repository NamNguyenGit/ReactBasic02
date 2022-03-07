import React, { useState, Fragment } from "react";
import AddUser from "./Users/AddUser";
import { UserList } from "./Users/UserList";

export default function UserDetails() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser addUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}
