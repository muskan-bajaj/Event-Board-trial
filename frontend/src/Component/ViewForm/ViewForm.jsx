import React from 'react'
import FetchFields from '../Form/CreateForm/FetchFields/FetchFields'

import "./ViewForm.css"

export default function ViewForm(props) {
    const submitForm=async()=>{
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
                <FetchFields event={e}/>
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
