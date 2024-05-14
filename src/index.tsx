import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { LinksProvider } from "./components/context/LinksContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LinksProvider>
      <RouterProvider router={routes} />
    </LinksProvider>
  </React.StrictMode>
);

reportWebVitals();
