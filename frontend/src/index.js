import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NoticeContextProvider } from "./Component/Context/NoticeContext";
// import { AuthContextProvider } from "./Component/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthContextProvider>
  <NoticeContextProvider>
    <App />
  </NoticeContextProvider>
  // </AuthContextProvider>
);
