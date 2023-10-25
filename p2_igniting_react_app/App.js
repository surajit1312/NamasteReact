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

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    key: "heading-1",
  },
  "Namaste everyone from React!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "title",
    key: "heading-2",
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

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
