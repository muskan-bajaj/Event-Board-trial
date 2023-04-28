import React from 'react'
import FetchFields from '../ViewForm/ViewForm'

export default function ViewForm(props) {
  return (
    <div>
        <div>
            Form Name: {props.name}
        </div>
        <div>
            Form Description: {props.description}
        </div>
        <div>
            {props.formFields.map((e)=>(
                <FetchFields event={e}/>
            ))}
        </div>
        {/* <div>
            <button onClick={cross}>Cancel</button>
            <button onClick={confirm}>Confirm</button>
        </div> */}
    </div>
  )
}
