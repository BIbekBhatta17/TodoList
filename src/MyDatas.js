import React from 'react'
import { MyValue } from './MyValue'
import './MyData.css'

function MyDatas({datafile,onDeleteFunc}) {
    return (
        <div className="mydata">
            
           { datafile.length===0 ? <div className="Message_card"> No Data Exist </div> :  datafile.map((value,index)=>{
               return<MyValue data ={value} onDelete={onDeleteFunc} key = {index}/>
             
           })
        
        }
        
        </div>
    )
}

export default MyDatas
