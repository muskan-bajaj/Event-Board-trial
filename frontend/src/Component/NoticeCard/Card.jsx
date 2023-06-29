import React, { useContext } from "react";
// import React,{useState} from 'react'
import { Link, generatePath, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

export default function Card(props) {
  const redirect = useNavigate();
  const id = props.element._id;

  const authContextValue = useContext(AuthContext);

  const fetchForm = async () => {
    redirect(`/dashboard/form/${id}`);
    localStorage.setItem("noticeID", id);
  };

  const data = async () => {
    redirect(`/dashboard/data/${id}`);
  };

  return (
    <div>
      <div className="card">
        <div className="content">
          <div className="description">
            <div className="societyLogo">
              <img className="image" src={props.element.logo} alt="" />
            </div>
            <div className="details">
              <div className="eventName">{props.element.eventName}</div>
              <div className="eventDes">{props.element.eventDes}</div>
            </div>
          </div>
          <div className="date">
            {props.element.date}
            <button className="fillForm" onClick={fetchForm}>
              FORM
            </button>
            {authContextValue.loggedIn ? (
              <button onClick={data}>DATA</button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="poster">
          <img className="posterImage" src={props.element.poster} alt="" />
        </div>
      </div>
    </div>
  );
}
