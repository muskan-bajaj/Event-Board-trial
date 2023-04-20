import React, { useEffect, useState,useContext } from 'react'

import './Form.css'
import Fields from '../Fields/Fields'

import { AuthContext } from '../../../Context/Context'


export default function Form() {
    const [fieldNo,setFieldNo]=useState([[1]]);

    const [formTitle,setFormTitle]=useState('')
    const [formDes,setFormDes]=useState('')
    const [error,setError]=useState(null)

    const authContextValue=useContext(AuthContext)

    // const fieldName=authContextValue.fieldName
    // const fieldType=authContextValue.fieldType
    // const mandate=authContextValue.mandate

    const fields=authContextValue.fields;

    const handleAddField=async()=>{
        setFieldNo(prevState => [...prevState, [1]])
    }

    useEffect(() => {
        console.log(fieldNo);
    }, [fieldNo]);

    const sumbitFunction=async(e)=>{
        const id=localStorage.getItem('id');
        const formDetails={formTitle,formDes,fields}
        // console.log(formDetails)
        // const formDetails={formTitle,formDes}
        console.log(formDetails)
    // console.log(authContextValue.login)
        // const response=await fetch("/api/notices",{
        //     method:'POST',
        //     body:JSON.stringify(formDetails),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })

        // const json=await response.json()

        // if(!response.ok){
        //     setError(json.error)
        // }
        // if(response.ok){
        //     setFormTitle('')
        //     setFormDes('')
        //     setError(null)
        // }
    }

    return (
    <div className='registrationForm'>
        <div className="automatedFormHeading">
            <div className="formHeadingText">Form Heading</div>
            <div className="FormHeadingFields">
                <div className="formTitle">
                    <label htmlFor="fTitle" className='headingLabelFT'>Form Title:</label>
                    <input type="text" id='fTitle' onChange={(e)=>setFormTitle(e.target.value)} value={formTitle}/>
                </div>
                <div className="formDescription">
                    <label htmlFor="fDescription" className='headingLabelFD'>Form Description: </label>
                    <input type="text" id='fDescription'  onChange={(e)=>setFormDes(e.target.value)} value={formDes}/>
                </div>
            </div>
        </div>
        <div className="formFields">
            <div className="formHeadingText">Add Fields</div>
            {fieldNo.map((e)=>(
                <Fields/>
            ))}
            <div className="addField">
                <button className='AF' onClick={handleAddField}>+ ADD FIELD</button>
            </div>
        </div>
        <div className="createFormButton">
            <button>Preview Form</button>
            <button onClick={sumbitFunction}>Create Form</button>
        </div>
    </div>
  )
}