import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
