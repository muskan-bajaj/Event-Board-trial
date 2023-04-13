import React, { useEffect, useState } from 'react'

import './Form.css'
import Fields from '../Fields/Fields'

export default function Form() {
    const [fieldNo,setFieldNo]=useState([[1]]);

    const handleAddField=async()=>{
        // fieldNo.push([1]);
        // setFieldNo(...fieldNo,[1])
        setFieldNo(prevState => [...prevState, [1]])
    }

    // useEffect(()=>{
    //         fieldNo.push([1]);
    //         setFieldNo(fieldNo.push(1));
    //     }
    // },[fieldNo]);

    useEffect(() => {
        console.log(fieldNo);
    }, [fieldNo]);

    return (
    <div className='registrationForm'>
        <div className="automatedFormHeading">
            <div className="formHeadingText">Form Heading</div>
            <div className="FormHeadingFields">
                <div className="formTitle">
                    <label htmlFor="fTitle" className='headingLabelFT'>Form Title:</label>
                    <input type="text" id='fTitle'/>
                </div>
                <div className="formDescription">
                    <label htmlFor="fDescription" className='headingLabelFD'>Form Description: </label>
                    <input type="text" id='fDescription' />
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
                {/* <hr /> */}
            </div>
        </div>
        <div className="createFormButton">
            <button>Preview Form</button>
            <button>Create Form</button>
        </div>
    </div>
  )
}