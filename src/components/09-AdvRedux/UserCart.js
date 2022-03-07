import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";

export default function UserCart() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
