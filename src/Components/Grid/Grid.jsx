import { useState } from "react";
import Card from "../Cards/Card";
import './Grid.css';
import isWinner from "../../Helper/checkWinner";

const Grid = ({numverOfCards }) => {
    const [board, setBoard] = useState(Array(numverOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn == true){
            board[index] = "O";
        }
        else if(turn == false){
            board[index] = "X"
        }

        const win  = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numverOfCards).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight"> Winner is: {winner} </h1>
                        <button className="reset" onClick={reset}>Reset</button>
                    </>
                )
            }

             <h1 className="turn-highlight">Current turn: {turn ? "O" : "X"}</h1>
             <div className="grid">
                {board.map((el, idx) => <Card gameEnd={winner ? true: false } key={idx} player={el} index={idx} onPlay={play} />)}
            </div>
        </div>
    )
}

export default Grid;