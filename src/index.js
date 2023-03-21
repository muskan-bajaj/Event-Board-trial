import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NoticeContextProvider } from "./Component/Context/NoticeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NoticeContextProvider>
    <App />
  </NoticeContextProvider>
);
