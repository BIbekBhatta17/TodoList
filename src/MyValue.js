import React from 'react'
import './MyValue.css'
export const MyValue = ({ data,onDelete }) => {
    return (

        <div className="MyValue">
            <div>
                <h2>{data.name}</h2>
                <p>{data.desc} </p>
            </div>
            <div className="btn_margin">
                <button type="Button"  onClick={()=>onDelete(data)}>Delete</button>
            </div>
        </div>







    )
}
