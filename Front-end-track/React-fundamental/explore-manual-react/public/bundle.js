// const Apps = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "Testing apps project"
// );

const App = () => {
  return React.createElement("div", null, "this is div");
};

// root.render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(App());
