/**
 * <div id="parent">
 *   <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 */

// Nested elements using React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag of child 1"),
    React.createElement("h2", {}, "I am h2 tag of child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag of child 1"),
    React.createElement("h2", {}, "I am h2 tag of child 2"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React!",
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// parent = React element which is essentially a JS object.

root.render(parent);
