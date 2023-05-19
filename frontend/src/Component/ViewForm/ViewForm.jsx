import React, { useContext, useEffect, useState } from 'react'
import FetchFields from '../Form/CreateForm/FetchFields/FetchFields'

import "./ViewForm.css"
import { AuthContext } from '../Context/Context'

export default function ViewForm(props) {
    const authContextValue=useContext(AuthContext)

    const [userData,setUserData]=useState([])

    // useEffect(()=>{
        // authContextValue.array.push(userData)
    // },[userData])

    const submitForm=async()=>{
        // console.log(userData)
        console.log(authContextValue.array)
            // const fetchForm=await fetch("/api/form");
            // const json=await fetchForm.json();
            // for(var i=0;i<json.length;i++){
            //     for(var element in json[i]){
            //         if(element==='noticeID'){
            //             if(json[i][element]===id){
            //                 if(fetchForm.ok){
            //                     setObjectArray(json[i])
            //                 }
            //             }
            //         }
            //     }
            // }
    }
  return (
    <div className='viewForm'>
        <div className='viewName'>
            {props.name}
        </div>
        <div className='viewDes'>
            {props.description}
        </div>
        <div className='viewField'>
            {props.formFields.map((e)=>(
                <FetchFields event={e} userData={userData} setUserData={setUserData}/>
            ))}
        </div>
        <div className="viewSubmit">
            <button onClick={submitForm}>SUBMIT</button>
        </div>
        {/* <div>
            <button onClick={cross}>Cancel</button>
            <button onClick={confirm}>Confirm</button>
        </div> */}
    </div>
  )
}
