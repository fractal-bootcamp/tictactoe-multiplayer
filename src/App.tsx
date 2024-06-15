import './App.css'
import React, { useEffect } from "react"
import { useState } from "react"


//to fetch and try it, in the App, create a function inside a button that fetches
//the gameId and the getGame in order to check whether UI is working


function calculateWinner({ squares }: { squares: any[] }) {


  const lines = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  //a for-loop will run for the length of that array

  for (let i = 0; i < lines.length; i++) {

    //each array will be fragmented in three components, into a new array
    const [a, b, c] = lines[i];

    //inside this level, if a exists, a = b, and a = c, that means that they are equivalent

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      //in that case, return squares[a] as the value for declarin the winner.
      //if the value is "X", X is the winner, if its "O", O is the winner
      return squares[a];
    }
  }
  return null;
}

// function isXNext() {

//   let flip = true;

//   if (flip = true) {
//     let value2 = "X"
//   }

//   else

//     let value1 = "O";

// }

function Square({ value, onClickFunction }: { value: any, onClickFunction: () => void }) {
  return (
    <>
      <div>
        <button className="square" onClick={onClickFunction}>{value}</button>
      </div>
    </>
  )
}


export type Token = "X" | "O"
type Player = {
  token: Token,
  id: string
}
type GottenGame = {
  id: string,
  board: string[]
  player1: Player,
  player2: Player,
  currentPlayer: Token
  winner: Token | null,
  status: string
}
//declare path
const serverPath = "http://localhost:3004";
//get the game
const getGameJSON = async (id: string) => {

  const response = await fetch(`${serverPath}/games/${id}`)

  const json: GottenGame = await response.json();
  return json;
}
export default function App() {
  const [squares, setSquare] = useState<string[]>(Array(9).fill(""));
  // const [history, setHistory] = useState<string>("");
  const [isXNext, setIsXNext] = useState<boolean>(false);
  const [whoIsWinner, setWhoIsWinner] = useState<string>("");
  // const [poller, setPoller] = useState<number>(0);

  //   //set the game
  useEffect(() => {

    const initializeGame = async () => {

      //go get the game
      const game = await getGameJSON("key1");

      //store the game in state
      setSquare(game.board)

    }

    initializeGame();
  }, []);






  //make a move POST request

  // const makeAMove = async (id: string, index: number) => {
  //   const response = await fetch(`http://localhost:3004/game/${id}/move`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ index, playerId: "" }) // is the Index the emptyboard defined up?
  //     // The body of the request is a JSON string containing the index of the move.
  //     //This is where the client tells the server which position on the Tic Tac Toe
  //     //board is being selected.

  //     //JSON exists as a string — useful when you want to transmit data across a network.
  //     //It needs to be converted to a native JavaScript object when you want to access the data.
  //     //This is not a big issue — JavaScript provides a global JSON object that has methods available
  //     //for converting between the two.

  //   })
  //   const json = await response.json();
  //   console.log(json);
  //   return json;
  // }


  //   //polling is when you ask for an update ever so often
  //   setTimeout(() => {
  //     setPoller(poller + 1)
  //   }, 1000);
  // }, [poller]);


  // const handleClick = async (index: number) => {
  //   const winner = calculateWinner({ squares });
  //   if (winner) {
  //     setWhoIsWinner(`${winner} is the winner!`);
  //     return;
  //   }
  //   if (squares[index] === "") {
  //     const newSquares = [...squares];
  //     newSquares[index] = isXNext ? "X" : "O";
  //     setSquare(newSquares);
  //     setIsXNext(!isXNext)
  //     const updatedGame = await makeAMove(gameId, index);
  //     if (updatedGame.status === "completed" && updatedGame.winner) {
  //       setWhoIsWinner(`${updatedGame.winner} is the winner!`);
  //     }
  //   }
  // };





  return (
    <div id="root">
      <h2>Tic Tac Toe</h2>
      {/* <button onClickFunction={() => }></button> */}
      <div className="board">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClickFunction={() => "X"} />
        ))}
      </div>
      <h3>{whoIsWinner}</h3>
    </div>
  );
}
