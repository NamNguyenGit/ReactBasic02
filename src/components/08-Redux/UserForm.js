import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index";

export default function UserForm() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
