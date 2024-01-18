// import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "./components/ui/toaster.tsx";

import { AuthProvider } from "./contexts/authContext/AuthProvider.tsx";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster/>
      </AuthProvider>
    </BrowserRouter>
  </>
  // </React.StrictMode>,
);
