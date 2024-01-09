import { CheckingForBundle } from "./another";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Apps = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Testing apps project"
);

const App = () => {
  {
    return React.createElement(
      "div",
      null,
      "this is div",
      CheckingForBundle()
    );
  }
};

root.render(<App />);
