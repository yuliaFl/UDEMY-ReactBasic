import React from 'react'
import { useState } from 'react';

export default function List(){

    const[taskname, settaskname]=useState('')
    const[tasklist, settasklist]=useState([])

    function addtask(){
        settasklist([...tasklist,taskname])

    }

    const tasklistcontent= tasklist.map((task, index)=>{
        return(
            <div>
                <p>{task}</p>
                <i class="fa fa-trash" aria-hidden="true" onClick={()=>deletetask(index)}></i>
            </div>
        )
    })

    function deletetask(index){
       var duparray= [...tasklist]
       duparray.splice(index,1)
       settasklist(duparray)
    }

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>React TODO List</h1>
                    <input type="text" placeholder="add something" className="form-control" value={taskname}
                    onChange={(e)=>{settaskname(e.target.value)}}/>
                    <button className="btn btn-success" onClick={addtask}>ADD</button>

                    <br/>
                    {tasklistcontent}

                </div>
            </div>
        </div>
    )
}