import React from "react";
import { Nav } from "react-bootstrap";

function Navbar(){
    return(
        <div style={{backgroundColor:'brown'}}>
            <h1>React Meals</h1>
            <a style={{margin:'10px', color:'white'}}>Home</a>
            <a style={{margin:'10px', color:'white'}}>Order</a>
            <a style={{margin:'10px', color:'white'}}>Contact</a>
        </div>
    )
}

export default Navbar;