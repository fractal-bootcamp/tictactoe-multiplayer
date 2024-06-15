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

function isXNext() {

  let value1 = "X";

  let flip = true;

  if (flip = true) {
    let value2 = "X"
  }

  else

    value1 = "O";

}

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

type GottenGame = {
  board: string[]
  currentPlayer: Token,
  isXNext: false,
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

// make a move
// takes 2 arguments
// first arg - id of string (game id) (key in the object of server games)
// second arg - board position of the move we want to make
const makeAMove = async (id: string, index: number) => {

  // ALL FETCHES have a request and a response
  //

  const response = await fetch(`http://localhost:3004/game/${id}/move`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ index })
    // The body of the request is a JSON string containing the index of the move.
    //This is where the client tells the server which position on the Tic Tac Toe
    //board is being selected.

  })

  // pull the body out and format the response
  const json = await response.json();
  console.log(json);
  return json;
}




export default function App() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  // const [history, setHistory] = useState<string>("");
  const [isXNext, setIsXNext] = useState<boolean>(false);
  const [whoIsWinner, setWhoIsWinner] = useState<string>("");
  // const [poller, setPoller] = useState<number>(0);

  //   //set the game
  useEffect(() => {

    const initializeGame = async () => {

      //go get the game
      const game = await getGameJSON("blablabla");

      //store the game in state
      setSquares(game.board)


    }

    initializeGame();
  }, []);



  const handleClick = async (index: number) => {
    console.log(index)

    const game = await getGameJSON("blablabla");

    makeAMove("blablabla", index);

    setSquares(game.board)
  }



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
  //     setSquares(newSquares);
  //     setIsXNext(!isXNext)

  //     const updatedGame = await makeAMove;
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
          <Square key={index} value={value} onClickFunction={() => {
            handleClick(index)
          }} />
        ))}
      </div>
      <h3>{whoIsWinner}</h3>
    </div>
  );
}
