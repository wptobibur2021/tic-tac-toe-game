import React from "react";
import './Squares.css'
const Squares = props =>{
    return (
        <div className='col-md-auto m-0 p-0'>
            <button className='btn btn-outline-dark' onClick={props.onClick}>{props.value}</button>
        </div>

    )
}
export default Squares