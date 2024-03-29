import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  generatePath,
  useParams,
} from "react-router-dom";
import { AuthContext } from "./Component/Context/Context";
import Navbar from "./Component/NavBar/Navbar";
import Form from "./Component/Form/CreateForm/Form/Form";
import Home from "./Page/Home";
import Login from "./Page/Login";
import ForgetPassword from "./Page/ForgetPassword";
import Dashboard from "./Page/Dashboard";
import ViewForm from "./Page/ViewForm";
import UserView from "./Component/UserView/UserView";
import UserData from "./Page/UserData";

function App() {
  const authContextValue = useContext(AuthContext);
  authContextValue.setLoggedIn(localStorage.getItem("id") ? true : false);

  // const {id}=useParams();
  // console.log(id)

  // const id=localStorage.getItem("noticeid");

  // var form;
  // const [form, setForm]=useState(null);
  // var objectArray=[];

  // useEffect(()=>{
  //   const fetchForm =async()=>{
  //       const form=await fetch("/api/form");
  //       const json=await form.json();
  //       for(var i=0;i<json.length;i++){
  //         for(var element in json[i]){
  //           if(element==='id'){
  //             if(json[i][element]===id){
  //               if(form.ok){
  //                 objectArray.push(json[i])
  //               }
  //             }
  //           }
  //         }
  //       }
  //       setForm(objectArray)
  //   }
  //   fetchForm();
  // },[form])

  // useEffect(()=>{
  //   const fetchForm =async()=>{
  //       const fetchForm=await fetch("/api/form/:id",{id});
  //       console.log(fetchForm)
  //   }
  //   fetchForm();
  // },[form])

  window.addEventListener("beforeunload", function(e) {
    e.preventDefault();
    localStorage.removeItem("onLogin");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          {authContextValue.loggedIn && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
          <Route path="/dashboard/form/:id" element={<ViewForm />} />
          <Route path="/dashboard/form" element={<Form />} />
          {authContextValue.loggedIn && (
            <Route path="/dashboard/data/:id" element={<UserData />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
