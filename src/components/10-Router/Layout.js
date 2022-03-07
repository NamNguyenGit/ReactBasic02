import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

export default function Layout() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
