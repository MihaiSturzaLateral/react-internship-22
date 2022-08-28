import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { reducerCount } from "./reducer";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducerCount);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
