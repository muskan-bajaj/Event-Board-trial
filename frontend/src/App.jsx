import React,{ useContext }  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Component/Context/Context";
import Navbar from "./Component/NavBar/Navbar";
import Form from "./Component/Form/CreateForm/Form/Form";
import Home from "./Page/Home";
import Login from "./Page/Login";
import ForgetPassword from "./Page/ForgetPassword"
import Dashboard from "./Page/Dashboard";
import ViewForm from "./Page/ViewForm";


function App() {
  const authContextValue=useContext(AuthContext);
  authContextValue.setLoggedIn(localStorage.getItem('id')?true:false)

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    localStorage.removeItem('onLogin')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgetPassword" element={<ForgetPassword/>}/>
            {authContextValue.loggedIn && (<Route path="/dashboard" element={<Dashboard/>}/>)}
            {/* {authContextValue.loggedIn && (<Route path="/dashboard/form/:id" element={<ViewForm/>}/>)} */}
            {authContextValue.loggedIn && (<Route path="/dashboard/form" element={<Form/>}/>)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
