import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Create a root element and render the App component wrapped in BrowserRouter
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
