// Modify the App and move actions into the server
// App barely handles anything anymore


console.log("Hello via Bun!");

import express from "express";

import cors from "cors";
// import express, { Request, Response } from 'express';

const app = express();
const port = 3004;

interface GameParams {
    game: string;
}
// add json handling
app.use(express.json());

// add cors

app.use(cors())

// app.get('/', (req, res) => {
//     console.log("hi")
//     res.send("hello world")
// })




// //Routes to interact with game state
// // // gamestate

// ORDER OF OPERATIONS
// get("/board")
// 

// // // set the conditions of the game here, take them from the App
type Token = "X" | "O"
type Player = {
    token: Token,
    id: string
}
type Game = {
    board: string[]
    player1: Player,
    player2: Player,
    currentPlayer: Token
    winner: Token | null,
    status: string
}
let games: Record<string, Game> = {
    blablabla: {
        board: ["", "", "", "", "x", "", "", "", ""],
        player1: { token: "X", id: "1" },
        player2: { token: "O", id: "2" },
        currentPlayer: "X",
        winner: null,
        status: ""
    },
    game2: {
        board: ["", "", "", "", "x", "", "", "", ""],
        player1: { token: "X", id: "1" },
        player2: { token: "O", id: "2" },
        currentPlayer: "X",
        winner: null,
        status: ""
    }
}



app.get("/games/:id", (req, res) => {
    const id = req.params.id;
    const game = games[id];
    const game2 = games['game2']

    console.log(game)

    res.json(game)


    // const user = userst.find(([id, user]) => user.name === name)


    // console.log(user)
    // // go look up a user by id


    // res.json({ user: user?.[1] })
})


app.get("/games/:id/player1", (req, res) => {
    const id = req.params.id;
    const game = games[id];
    const game2 = games['game2']

    console.log(game)

    res.json(game)


    // const user = userst.find(([id, user]) => user.name === name)


    // console.log(user)
    // // go look up a user by id


    // res.json({ user: user?.[1] })
})



app.post("/game/:id/move", (req, res) => {
    const id = req.params.id;
    const { index } = req.body;
    const game = games[id];

    if (game.board[index] === "") {
        game.board[index] = "X"
    }

    res.json(game)



}
)


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


// // Move dynamics
// app.post("/game/:id/move", express.json(), (req, res) => {
//     const id = req.params.id;
//     const { index } = req.body;
//     const game = games[id];

//     if (!game) {
//         return res.status(404).send("Game not found");
//     }

//     // Check index in the board
//     if (game.board[index] === "") {
//         game.board[index] = game.currentPlayer;
//         // Check for win condition, update game status, switch players, etc.
//         game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
//         // Update other game logic as needed


//         //Check winner
//         const winner = calculateWinner(game.board);
//         if (winner) {
//             game.winner = winner;
//         }

//         return res.status(200).send(game);

//     } else {
//         return res.status(400).send("Do not do that!");
//     }
// });

// // //move

// // app.post("/game/:id/move", (req, res) => {
// //     const id = req.params.id;
// //     const games = games[id];

// //     const { index } = req.body;

// //     if (!game) {
// //         return res.status(404).send("Game not found");
// //     }

// //     // const newBoard = [...board] //this needs to be coded in App.tsx first

// //     //newBoard[index]=player
// //     //setBoard(newBoard)

// //     //togglePlayer();

// //     const newBoard = game.board;
// //     const player = game.currentPlayer;
// //     newBoard[index] = player;
// //     games.currentPlayer = player === "X" ? "O" : "X";

// //     res.json({ game });


// // //there is two ways of sending data: through URL and from the body
// // // if you are sending complex data, use the body method
// // //if only id, you can use URL parameters


// // this probably returns a game by id
// app.get("/game/:id", (req, res) => {

//     const gameId = req.params.game;
//     console.log(gameId)
//     const game = games[gameId];

//     console.log("Game object:", game);

//     if (!game) {
//         console.log("Game not found");
//         return res.status(404).send("Game not found");
//     } else {
//         console.log("Game found, sending response:", game);
//         return res.status(200).send(game);
//     }
// });



// app.get("/", (req, res) => {
//     res.send(
//         JSON.stringify(games.key1.board)
//     )
// });


//  calculateWinner({ squares }: { squares: any[] }) {


//     const lines = [
//         //rows
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],

//         //columns
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],

//         //diagonals
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     //a for-loop will run for the length of that array

//     for (let i = 0; i < lines.length; i++) {

//         //each array will be fragmented in three components, into a new array
//         const [a, b, c] = lines[i];

//         //inside this level, if a exists, a = b, and a = c, that means that they are equivalent

//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

//             //in that case, return squares[a] as the value for declarin the winner.
//             //if the value is "X", X is the winner, if its "O", O is the winner
//             return squares[a];
//         }
//     }
//     return null;
// }

// Run the following command in the terminal to get the game object: curl localhost:5000/games/1

// 



// // // Check through the terminal how to update, and fetch, etc.
