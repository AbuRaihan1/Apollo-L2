import React from "react";
import ReactDOM from "react-dom/client";
import { CheckingForBundle } from "../src/another";
import { Name } from "./Name";
const App = () => {
  {
    return React.createElement(
      "div",
      null,
      "This is div",
      CheckingForBundle(),
      Name()
    );
  }
};

// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root")).render(App());
