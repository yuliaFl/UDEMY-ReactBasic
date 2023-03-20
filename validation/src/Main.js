import React, { useState } from "react";

export default function Main(){
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword, setCP]=useState('')

    const[userError, setUserError]=useState('')
    const[emailError, setEmailError]=useState('')
    const[passError, setPassError]=useState('')
    const[cpError, setCPerror]=useState('')

    const[ucolor, setucolor]=useState('')
    const[ecolor, setEcolor]=useState('')
    const[pcolor, setPcolor]=useState('')
    const[cpcolor, setCPcolor]=useState('')


    function validate(){
        if (username.length>8){
            setUserError('')
            setucolor('green')
        }
        else{
            setUserError('username must be 8 letters long')
            setucolor('red')
        }

        if(email.includes('@gmail')){
            setEmailError('')
            setEcolor('green')
        }
        else{
            setEmailError('email must include @gmail')
            setEcolor('red')
        }

        if(password.length > 8 && password.includes('.')){
            setPassError('')
            setPcolor('green')
        }
        else{
            setPassError('should be 8 letters long and it should have . ')
            setPcolor('red')
        }

        if(password !== '' && password === cpassword){
            setCPerror('')
            setCPcolor('green')
        }
        else{
            setCPerror('passwords dont match')
            setCPcolor('red')
        }
    }

    return(
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5">
            <h1> Form Validation</h1>

            <input type="text" placeholder="username" className="form-control" style={{borderColor:ucolor}}
            value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <p>{userError}</p>

            <input type="text" placeholder="email" className="form-control" style={{borderColor:ecolor}}
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <p>{emailError}</p>

            <input type="text" placeholder="password" className="form-control" style={{borderColor:pcolor}}
            value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
           <p>{passError}</p>

            <input type="text" placeholder="confirm password" className="form-control" style={{borderColor:cpcolor}}
            value={cpassword} onChange={(e)=>{setCP(e.target.value)}}/>
           <p>{cpError}</p>

            <button className="btn btn-success" onClick={validate}>SUBMIT</button>
            </div>
        </div>
    </div>
)
}