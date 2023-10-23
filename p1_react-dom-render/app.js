const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
  },
  "Namaste everyone from React!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "title",
  },
  "This is an illustration of creating elements from React!"
);

const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
