/**
 * Parcel Benefits
 * - Creation of Live Server
 * - (HMR) Hot Module Replacement
 * - File watcher algorithm (C++)
 * - BUNDLING
 * - Code Minification
 * - Code cleanup
 * - Local and Production build
 * - Super Fast Build algorithm
 * - Image Optimization
 * - Caching while development
 * - Code Compression
 * - Compatibility with old version of browsers
 * - HTTPS on Dev
 * - Port creation
 * - Consistent Hashing Algorithm
 * - Zero Configuration
 * - Transitive Dependency resolutions
 * - Tree Shaking - unused code removal
 */
import React from "react";
import ReactDOM from "react-dom/client";

// const container = React.createElement(
//   "div",
//   {
//     className: "container",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         id: "title",
//         className: "title",
//         key: "heading-1",
//       },
//       "Namaste everyone from React!"
//     ),
//     React.createElement(
//       "ul",
//       {
//         id: "list",
//         className: "list",
//         key: "ul-list",
//       },
//       [
//         React.createElement(
//           "li",
//           {
//             className: "list-item",
//             key: "list-item-1",
//           },
//           "List Item 1"
//         ),
//         React.createElement(
//           "li",
//           {
//             className: "list-item",
//             key: "list-item-2",
//           },
//           "List Item 2"
//         ),
//         React.createElement(
//           "li",
//           {
//             className: "list-item",
//             key: "list-item-3",
//           },
//           "List Item 3"
//         ),
//       ]
//     ),
//   ]
// );

const Title = () => (
  <h1 id="title" key="heading-1">
    Heading from JSX code
  </h1>
);

// console.log(container);

// React Functional Component - NEW Style
const evaluatedVal = "Evaluated Value: " + 2 * 3;
const HeaderComponent = () => {
  return (
    <div>
      {evaluatedVal}
      <Title />
      <h2>This is a Header Component from React Functional Component</h2>
      <h3>This is another Header Tag</h3>
    </div>
  );
};

// React Class Component - OLD Style

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * All of the below ways work
 */

// root.render(HeaderComponent());

// root.render(<HeaderComponent />);

root.render(<HeaderComponent></HeaderComponent>);
