import React, {Component} from 'react';
import Board from './Board'

const gameWinner = arraySquares =>{
   const arrayLine = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,5,10,15],
        [3,6,9,12]
   ]
    for(let i=0; i < arrayLine.length; i++){
        const [a,b,c,d] = arrayLine[i]
        if(arraySquares[a] && arraySquares[a] === arraySquares[b] && arraySquares[a] === arraySquares[c] && arraySquares[a] === arraySquares[d]){
            return arraySquares[a]
        }
    }
    return null
}

class Index extends Component {
    // Project State Declaration
    state = {
        historyData: [{squares: Array(16).fill(null)}],
        moveNumber: 0,
        playerOfX: true
    }
    // Handle Click Function Declaration
    handleClick = i =>{
        const  history = this.state.historyData.slice(0, this.state.moveNumber + 1)
        console.log('History: ', history)
        console.log('moveNumber: ', this.state.moveNumber)
        const  currentLocation = history[history.length - 1]
        console.log('currentLocation: ',currentLocation)
        console.log('Squares: ',currentLocation.squares)
        const  squares = currentLocation.squares.slice()
        console.log('arraySquares: ',squares)
        if(gameWinner(squares) || squares[i]){
            return
        }
        squares[i] = this.state.playerOfX ? 'X' : 'Y'
        console.log(squares)
        console.log(i)
        this.setState({
            historyData: history.concat([{ squares }]),
            moveNumber: history.length,
            playerOfX: !this.state.playerOfX
        })
        console.log(this.state.historyData)
    }
    // Jump to Function Declaration
    jumpTo = step =>{
        this.setState({
            moveNumber: step,
            playerOfX: step % 2 === 0
        })
    }
    // Reset Game Function Declaration
    resetGame = () =>{
        this.setState({
            moveNumber: 0
        })
    }
    render() {
        // Render winner
        const history = this.state.historyData
        const current = history[this.state.moveNumber]
        const winner = gameWinner(current.squares)
        console.log(winner)
        // Jump To Methods Mapping Declaration
        const moves = history.map((step, move)=>{
            const desc = move ? 'Go to step no: ' +move : 'Start New Game Again'
            return (
                <div className='col-md-auto' key={move}>
                    <button className='btnMove' onClick={()=> this.jumpTo(move)}>{desc}</button>
                </div>
            )
        })
        // Game Status Declaration
        let status = ''
        if(winner){
            status = 'Game Winner: ' +winner
            alert(status)
        }else {
            status = 'Next Player: ' + (this.state.playerOfX ? 'X' : 'Y')
        }
        // Move Number/ Step Number Get and Condition for step move
        let getStepLists = this.state.moveNumber
        let stepLists
        console.log('Get List: ', getStepLists)
        if(getStepLists){
           stepLists = <div className='col-md-auto'>{moves}</div>
        }
        // Reset Button Condition Apply
        let btnReset
        if(getStepLists){
            btnReset = <button onClick={this.resetGame} className='btnMove text-danger'>Reset</button>
        }
        // Game Over Condition Apply
        if((getStepLists === 16) || winner){
            alert('Game Over, You can start again')
        }

        return (
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-12 text-center mb-5'>
                        <h2 className='text-danger'>Tic Tac Toe Game For My Practices</h2>
                    </div>
                    <div className='col-md-4'>
                        <h3>Game Information</h3>
                        <ul className='list-group'>
                            <li className='list-group-item'>Project Name: Tic Tac Toe</li>
                            <li className='list-group-item'>Project Development by <a target='_blank'  href='https://www.linkedin.com/in/tobibur'>Md Tobibur Rohman</a></li>
                            <li className='list-group-item'>Project Sources Code: <a target='_blank' href='https://github.com/wptobibur2021/tic-tac-toe-game'>GitHub</a></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h3>Game Board</h3>
                        {/*<Board onClick={this.handleClick} squares={this.state.historyData[0]}/>*/}
                        <Board onClick={this.handleClick} squares={current.squares}/>
                    </div>
                    <div className='col-md-4'>
                        {btnReset}
                        <h3 className='text-dark'>{status}</h3>
                        {stepLists}
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;