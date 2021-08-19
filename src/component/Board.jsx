import React from "react";
import Squares from "./Squares";

const Board = props =>{
    const rendomSquare = i => <Squares
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
    />

    return(
        <div className='col-md-auto'>
            <div className='row'>
                {rendomSquare(0)}
                {rendomSquare(1)}
                {rendomSquare(2)}
                {rendomSquare(3)}
            </div>
            <div className='row'>
                {rendomSquare(4)}
                {rendomSquare(5)}
                {rendomSquare(6)}
                {rendomSquare(7)}
            </div>
            <div className='row'>
                {rendomSquare(8)}
                {rendomSquare(9)}
                {rendomSquare(10)}
                {rendomSquare(11)}
            </div>
            <div className='row'>
                {rendomSquare(12)}
                {rendomSquare(13)}
                {rendomSquare(14)}
                {rendomSquare(15)}
            </div>
        </div>
    )
}

export default Board