import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar";
import Home from "./Page/Home";
import Login from "./Page/Login";
import ForgetPassword from "./Page/ForgetPassword"
import Dashboard from "./Page/Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgetPassword" element={<ForgetPassword/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
