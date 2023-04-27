import React, { useEffect, useState,useContext } from 'react'

import './Form.css'
import Fields from '../Fields/Fields'
import FetchFields from '../FetchFields/FetchFields'

import { AuthContext } from '../../../Context/Context'
import PreviewForm from '../FetchFields/FetchFields'


export default function Form() {
    const [fieldNo,setFieldNo]=useState([[1]]);
    const [formName,setFormName]=useState('')
    const [formDes,setFormDes]=useState('')
    const [error,setError]=useState(null)
    // const [fieldDisable,setFieldDisable]=useState("")
    // const [createForm,setCreateForm]=useState("")

    const [modal,setModal]=useState('modalInactive')

    const authContextValue=useContext(AuthContext)
    let fields = authContextValue.fields

    const handleAddField=async()=>{
        setFieldNo(prevState => [...prevState, [1]])
    }

    useEffect(() => {
        console.log(fieldNo);
    }, [fieldNo]);

    const sumbitFunction=async(e)=>{
        const userID=localStorage.getItem('id');
        const formDetails={userID,formName,formDes,fields}
        console.log(formDetails)
        const response=await fetch("/api/form",{
            method:'POST',
            body:JSON.stringify(formDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setFormName('')
            setFormDes('')
            setError(null)
        }
        // setFieldDisable("")
        // setCreateForm("clicked")
    }

    const confirm=async(e)=>{
        const userID=localStorage.getItem('id');
        const formDetails={userID,formName,formDes,fields}
        console.log(formDetails)
        const response=await fetch("/api/form",{
            method:'POST',
            body:JSON.stringify(formDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setFormName('')
            setFormDes('')
            setError(null)
        }

        setModal('modalInactive')
    }

    const previewHandler=async(e)=>{
        setModal('modalActive')
    }

    const cross=async(e)=>{
        setModal('modalInactive')
    }

    const noticeArray=authContextValue.notices

    return (
    <>
    <div className='registrationForm'>
        <div className="automatedFormHeading">
            <div className="formHeadingText">Form Heading</div>
            <div className="FormHeadingFields">
                <div className="formTitle">
                    <label htmlFor="fTitle" className='headingLabelFT'>Form Title:</label>
                    <select name="eventType" id="fTitle" onChange={(e)=>setFormName(e.target.value)} value={formName}>
                        <option>
                            Select event
                        </option>
                        {noticeArray.map(data=>(
                            <option value={data.eventName}>
                                {data.eventName}
                            </option>
                        ))}
                </select>  
                    {/* <input type="text" id='fTitle' onChange={(e)=>setFormName(e.target.value)} value={formName}/> */}
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
                // <Fields fieldDisable={fieldDisable} createForm={createForm}/>
            ))}
            <div className="addField">
                <button className='AF' onClick={handleAddField}>+ ADD FIELD</button>
            </div>
        </div>
        <div className="createFormButton">
            <button onClick={previewHandler}>Preview Form</button>
            <button onClick={sumbitFunction}>Create Form</button>
        </div>
    </div>

    <div className={modal}>
        <div className="overlay"></div>
        <div className="modal">
            {/* <div>
                <PreviewForm formName={formName} formDes={formDes} fields={fields}/>
            </div> */}
            <div>
                FORM NAME: {formName}
            </div>
            <div>
                FORM DESCRIPTION: {formDes}
            </div>
            <div>
                FIELDS:{fields.map((e)=>(
                    <FetchFields event={e}/>
                ))}
            </div>
            <div>
                <button onClick={cross}>Cancel</button>
                <button onClick={confirm}>Confirm</button>
            </div>
        </div>
    </div>
    </>
  )
}