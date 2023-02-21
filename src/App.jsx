import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar";
import Home from "./Page/Home";
import Login from "./Page/Login";
import ForgetPassword from "./Page/ForgetPassword"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
