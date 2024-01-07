import { CheckingForBundle } from "./another";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const App = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "Amar sonar bangla"
// );

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
