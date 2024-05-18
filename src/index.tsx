import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LinksProvider } from "components/context/LinksContext";
import routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

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
