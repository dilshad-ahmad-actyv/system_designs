// Designing a Tic-Tac-Toe game in TypeScript involves creating a simple structure that can handle the game state, manage turns, and determine the winner. Below is a basic implementation, including the design of classes, methods, and logic for the game.

// ### 1. **Create the Game Class**

// The main `TicTacToe` class will manage the game board, players, and game logic.

// ```typescript
// class TicTacToe {
//     private board: string[][];
//     private currentPlayer: string;
//     private winner: string | null;
//     private movesCount: number;

//     constructor() {
//         this.board = [
//             ["", "", ""],
//             ["", "", ""],
//             ["", "", ""]
//         ];
//         this.currentPlayer = "X";
//         this.winner = null;
//         this.movesCount = 0;
//     }

//     public printBoard(): void {
//         this.board.forEach(row => {
//             console.log(row.join(" | "));
//         });
//         console.log("\n");
//     }

//     public playMove(row: number, col: number): boolean {
//         if (this.board[row][col] !== "" || this.winner) {
//             return false;
//         }

//         this.board[row][col] = this.currentPlayer;
//         this.movesCount++;
//         this.checkWinner();
//         this.switchPlayer();
//         return true;
//     }

//     private switchPlayer(): void {
//         this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
//     }

//     private checkWinner(): void {
//         const winPatterns = [
//             // Rows
//             [[0, 0], [0, 1], [0, 2]],
//             [[1, 0], [1, 1], [1, 2]],
//             [[2, 0], [2, 1], [2, 2]],
//             // Columns
//             [[0, 0], [1, 0], [2, 0]],
//             [[0, 1], [1, 1], [2, 1]],
//             [[0, 2], [1, 2], [2, 2]],
//             // Diagonals
//             [[0, 0], [1, 1], [2, 2]],
//             [[0, 2], [1, 1], [2, 0]],
//         ];

//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern;
//             if (
//                 this.board[a[0]][a[1]] !== "" &&
//                 this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
//                 this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
//             ) {
//                 this.winner = this.board[a[0]][a[1]];
//                 return;
//             }
//         }

//         if (this.movesCount === 9) {
//             this.winner = "Draw";
//         }
//     }

//     public getWinner(): string | null {
//         return this.winner;
//     }

//     public resetGame(): void {
//         this.board = [
//             ["", "", ""],
//             ["", "", ""],
//             ["", "", ""]
//         ];
//         this.currentPlayer = "X";
//         this.winner = null;
//         this.movesCount = 0;
//     }
// }
// ```

// ### 2. **Using the Game Class**

// You can create a game instance, play moves, and check the winner:

// ```typescript
// const game = new TicTacToe();

// game.playMove(0, 0); // X plays at (0, 0)
// game.printBoard();

// game.playMove(0, 1); // O plays at (0, 1)
// game.printBoard();

// game.playMove(1, 1); // X plays at (1, 1)
// game.printBoard();

// game.playMove(1, 0); // O plays at (1, 0)
// game.printBoard();

// game.playMove(2, 2); // X plays at (2, 2)
// game.printBoard();

// const winner = game.getWinner();
// if (winner) {
//     console.log(`Winner: ${winner}`);
// } else {
//     console.log("No winner yet.");
// }

// // Reset the game to play again
// game.resetGame();
// ```ˀ

// ### 3. **Explanation**

// - **Board Initialization:** The game board is a 3x3 grid represented by a 2D array of strings.
// - **Current Player:** Tracks whose turn it is, either "X" or "O".
// - **Play Move:** Updates the board at the specified position if the cell is empty and the game is still ongoing.
// - **Switch Player:** Changes the current player after each move.
// - **Check Winner:** After each move, the game checks if there is a winning pattern or if the game is a draw.
// - **Print Board:** Displays the current state of the board in the console.
// - **Reset Game:** Resets the board and game state to start a new game.

// This TypeScript design can be further expanded with additional features like a user interface or an AI opponent.
