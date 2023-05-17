import React from 'react'
import ViewForm from '../ViewForm/ViewForm'

export default function PreviousForm() {
    const viewHandler=()=>{
        // console.log("vsdadscasnhdfklsj;ksd")
        // <ViewForm></ViewForm>
    }

  return (
    <div className='previousForm'>
        <div className="pFormName"></div>
        <div className="pFormDes"></div>
        <div className='pView' onClick={viewHandler}>
            View
        </div>
    </div>
  )
}
