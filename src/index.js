import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { App } from "./components/app";

const root = createRoot(document.getElementById("root"));

const Router =
  process.env.REACT_APP_GH_PAGES === "true" ? HashRouter : BrowserRouter;

console.log(process.env);

root.render(
  <Router>
    <App />
  </Router>
);
