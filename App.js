const heading = React.createElement(
  "div",
  { id: "container" },
  React.createElement(
    "h1",
    { id: "heading" },
    React.createElement(
      "p",
      { id: "paragraph" },
      "I m the paragraph inside div"
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
