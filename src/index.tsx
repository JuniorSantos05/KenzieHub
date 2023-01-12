import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Providers from "./providers/UserContext";
import TechProvider from "./providers/TechContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <TechProvider>
          <App />
        </TechProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
