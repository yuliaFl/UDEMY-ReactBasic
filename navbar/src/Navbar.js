import React, { useState } from 'react'

export default function Navbar(){
    const[navstatus, setNavstatus]=useState('')
    const[dwidth, setWidth]=useState('0px')

    function openNav(){
        if(navstatus===0){
            setWidth('100%')
            setNavstatus(1)
        }
        else{
            setWidth('0px')
            setNavstatus(0)

        }

    }

    return(
        <div>
            <div className='mainDiv' style={{width:dwidth}}>
                <button onClick={openNav}><i class="fa-solid fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact us</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}
