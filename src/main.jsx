// main.jsx
// PURPOSE: The single entry point. Mounts <App /> into the <div id="root"> in index.html.
// CONNECTS TO: index.html (mounts here), App.jsx (the root component), index.css (global styles)
// MANDATORY: YES. Deleting this file means React never starts. The page will be blank.
// SAFE TO MODIFY: Rarely. Only if you add global providers (e.g. a theme context).

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
