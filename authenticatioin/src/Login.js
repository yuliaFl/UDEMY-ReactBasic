import React, { useState } from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert'

function Login(){
    const[username, setUser] = useState('')
    const[password, setPassword]= useState('')

    function validate(event){
        event.preventDefault();
        if(username == 'java' && password == 'react'){
            swal('Login successful','Congratulation your login successful','success')
        }
        else{
            swal('Invalid login','Try again','error')
        }
    }

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1> React Authentication</h1>

                    <form onSubmit={validate}>
                        
                        <input type="text" placeholder="username" className="form-control" 
                         value={username} onChange={(e)=>{setUser(e.target.value)}}/>

                        <input type="text" placeholder="password" className="form-control"  
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                         <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;