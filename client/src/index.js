import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
registerServiceWorker();
