import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./providers/UserContext";
import VaccinesProvider from "./providers/VaccinesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <VaccinesProvider>
          <App />
        </VaccinesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
