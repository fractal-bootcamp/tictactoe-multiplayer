// import './App.css'
// import React, { useEffect } from "react"
// import { useState } from "react"


// //to fetch and try it, in the App, create a function inside a button that fetches
// //the gameId and the getGame in order to check whether UI is working


// //Server side



// /// When you are in the lobby, if you create the game you should store the id
// //if you join the game you should store the id
// //

// //for now, hardcore gameId

// const gameId = "key1"; // is this the game's Id?

// //change inside the app:
// //do not need to decide the player
// //or to set the tiles
// //in game we need a winCondition or winState (has anybody won)


// function calculateWinner({ squares }: { squares: any[] }) {


//   const lines = [
//     //rows
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],

//     //columns
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],

//     //diagonals
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   //a for-loop will run for the length of that array

//   for (let i = 0; i < lines.length; i++) {

//     //each array will be fragmented in three components, into a new array
//     const [a, b, c] = lines[i];

//     //inside this level, if a exists, a = b, and a = c, that means that they are equivalent

//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

//       //in that case, return squares[a] as the value for declarin the winner.
//       //if the value is "X", X is the winner, if its "O", O is the winner
//       return squares[a];
//     }
//   }
//   return null;
// }

// // function isXNext() {

// //   let flip = true;

// //   if (flip = true) {
// //     let value2 = "X"
// //   }

// //   else

// //     let value1 = "O";

// // }

// function Square({ value, onClickFunction }: { value: any, onClickFunction: () => void }) {
//   return (
//     <>
//       <div>
//         <button className="square" onClick={onClickFunction}>{value}</button>
//       </div>
//     </>
//   )
// }






// export default function App() {
//   const [squares, setSquare] = useState<string[]>(Array(9).fill(""));
//   // const [history, setHistory] = useState<string>("");
//   const [isXNext, setIsXNext] = useState<boolean>(false);
//   const [whoIsWinner, setWhoIsWinner] = useState<string>("");
//   // const [games, setGame] = useState<string[]>([]);
//   // const [poller, setPoller] = useState<number>(0);



//   //   //set the game
//   useEffect(() => {



//     const initializeGame = async () => {

//       //go get the game
//       const game = await getGame(gameId);



//       //store the game in state
//       setSquare(game.board)

//     }
//     initializeGame();
//   }, []);



//   const serverPath = "http://localhost:6000";

//   const getGame = async (id: string) => {
//     const gameId = "key1";

//     const response = await fetch(`${serverPath}/game/${id}`)
//     const json = await response.json();
//     return json;
//   }


//   //make a move POST request

//   const makeAMove = async (id: string, index: number) => {
//     const response = await fetch(`http://localhost:6000/game/${id}/move`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ index, playerId: "" }) // is the Index the emptyboard defined up?
//       // The body of the request is a JSON string containing the index of the move.
//       //This is where the client tells the server which position on the Tic Tac Toe
//       //board is being selected.

//       //JSON exists as a string — useful when you want to transmit data across a network.
//       //It needs to be converted to a native JavaScript object when you want to access the data.
//       //This is not a big issue — JavaScript provides a global JSON object that has methods available
//       //for converting between the two.

//     })
//     const json = await response.json();
//     console.log(json);
//     return json;
//   }


//   //   //polling is when you ask for an update ever so often
//   //   setTimeout(() => {
//   //     setPoller(poller + 1)
//   //   }, 1000);
//   // }, [poller]);

//   // const handleClick = async (index: number) =>  {
//   //   //to fetch and try it, in the App, create a function inside a button that fetches
//   //   //the gameId and the getGame in order to check whether UI is working

//   //   //everytime something clicks
//   //   //"X" will be displayed in the square
//   //   const winner = calculateWinner({ squares });

//   //   if (calculateWinner({ squares }) != null) {
//   //     setWhoIsWinner(`${winner} is the winner!`);
//   //   }

//   //   if (isXNext == false) {
//   //     const nextSquare = squares.slice();
//   //     nextSquare[n] = "X";
//   //     squares[n] = "O";
//   //     setSquare(nextSquare);
//   //     setIsXNext(true);
//   //     return winner;
//   //     // setHistory(() => "X")
//   //   } else if (isXNext == true) {
//   //     const nextSquare = squares.slice();
//   //     nextSquare[n] = "X";
//   //     squares[n] = "O";
//   //     setIsXNext(false);
//   //     return winner;
//   //     // setHistory(() => "O")
//   //   }
//   // }

//   //create a button that calls initialize game and then renders it again
//   //<button onClick={initializeGame}>Start Game</button> 

//   //and then it parses the json to send it to the server

//   //and then it will render the board
//   //<button onClick={initializeGame} stringify() >Start Game</button>

//   //to make a move, you have to call the makeAMove function inside the button
//   //and then you have to pass the gameId and the index of the square
//   // <button onClick={() => makeAMove(gameId, 0)}>Make a move</button>
//   // For the Square component, this would look like this:
//   // <Square value={squares[0]} onClickFunction={() => handleClick(0)} />
//   // handleClick(0) with the makeAMove function would look like
//   //this inside the handleClick function:
//   // const handleClick = (n: number) => { makeAMove(gameId, n) } 
//   // and then you would call the setSquare function to update the state
//   //of the squares array with the new board

//   const handleClick = async (index: number) => {
//     const winner = calculateWinner({ squares });
//     if (winner) {
//       setWhoIsWinner(`${winner} is the winner!`);
//       return;
//     }
//     if (squares[index] === "") {
//       const newSquares = [...squares];
//       newSquares[index] = isXNext ? "X" : "O";
//       setSquare(newSquares);
//       setIsXNext(!isXNext);
//       const updatedGame = await makeAMove(gameId, index);
//       if (updatedGame.status === "completed" && updatedGame.winner) {
//         setWhoIsWinner(`${updatedGame.winner} is the winner!`);
//       }
//     }
//   };

//   return (
//     <div id="root">
//       <h2>Tic Tac Toe</h2>
//       <div className="board">
//         {squares.map((value, index) => (
//           <Square key={index} value={value} onClickFunction={() => handleClick(index)} />
//         ))}
//       </div>
//       <h3>{whoIsWinner}</h3>
//     </div>
//   );
// }


// // CREATE A SETTILE FUNCTION

// //then go to server




// // BEFORE MAPPING:

// // return (
// //   <div id="root">
// //     <h2>Tic Tac Toe</h2>
// //     <div className="board">

// //       <Square value={squares[0]} onClickFunction={() => handleClick(0)} />
// //       <Square value={squares[1]} onClickFunction={() => handleClick(1)} />
// //       <Square value={squares[2]} onClickFunction={() => handleClick(2)} />
// //       <Square value={squares[3]} onClickFunction={() => handleClick(3)} />
// //       <Square value={squares[4]} onClickFunction={() => handleClick(4)} />
// //       <Square value={squares[5]} onClickFunction={() => handleClick(5)} />
// //       <Square value={squares[6]} onClickFunction={() => handleClick(6)} />
// //       <Square value={squares[7]} onClickFunction={() => handleClick(7)} />
// //       <Square value={squares[8]} onClickFunction={() => handleClick(8)} />
// //     </div>
// //     <h3>{whoIsWinner}</h3>
// //   </div>