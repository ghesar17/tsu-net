import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UsersContextProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </React.StrictMode>,
);
