import React from 'react'
import { useState } from 'react'
import './AddMyData.css'


const AddMyData = ({ passvalue }) => {
    
    const [codeID, setCodeID] = useState();
    const [name, setName] = useState();
    const [desc, setDesc] = useState();

    const addsubmit = (e) => {
        
        e.preventDefault();
      

        if (!setCodeID || !name || !desc) {
            alert("Enter the value")

           
        }
        else{
            passvalue(codeID, name, desc);


            setCodeID("");
            setName("");
            setDesc("");
        }

    }
    return (

        <div className="addmydata">
            <form onSubmit={addsubmit}>

                <p>ID: </p>
                <input type="text" placeholder="ID" key="1" value={codeID} id="mytype" onChange={(e) => { setCodeID(e.target.value)}}></input>

                <p>Name: </p>
                <input type="text" placeholder="Name" key="2" id="name" onChange={(e) => { setName(e.target.value) }}></input>

                <p>Description: </p>
                <input type="text" placeholder="Description" key ="3" id="desc " onChange={(e) => { setDesc(e.target.value) }}></input>
                <div className="btn_submit">
                    <input type="submit" value="Add Data" id="mydata_add"  ></input>
                </div>

            </form>

        </div>
    )
}

export default AddMyData
