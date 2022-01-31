import React from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import './styles/root.scss';
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
const NEW_GAME=[{board:Array(9).fill(null),isXNext:true},
];
const App=() => {  
const[history,setHistory]=React.useState(NEW_GAME);
const[currentMove,setCurrentMove]=React.useState(0);
const current=history[currentMove];
console.log('history',history);
const {winner,winingSquares}=calculateWinner(current.board);
const handlerSquareClick=(position)=>{
if(current.board[position] || winner){
return; 
}   
setHistory((prev) =>{
const last=prev[prev.length-1];

const newBoard= last.board.map((square,pos)=>{
if(pos === position) {
return last.isXNext ? 'X':'0';
}
return square;
});
return prev.concat({board:newBoard,isXNext:!last.isXNext});
});
setCurrentMove(prev=>prev+1);
};
const moveTo=(move)=>{
setCurrentMove(move);
}
const onNewGame=()=>{
setHistory(NEW_GAME);
setCurrentMove(0);
}
return(
<div  className="app">    
<h1> TIC <span className='text-green'> TAC </span> TOE </h1>
<StatusMessage winner={winner} current={current}   />
<Board board={current.board} handlerSquareClick={handlerSquareClick} winingSquares={winingSquares}/>
<button type='button' onClick={onNewGame} className={`btn-reset ${winner ?'active':''}`}>Start New Game</button>
<h2 style={{fontWeight:'normal'}}>current game history</h2>
<History history={history} moveTo={moveTo} currentMove={currentMove}/>
<div className="bg-balls" />
</div>
);
};
export default App;

