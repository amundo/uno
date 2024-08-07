import { Game } from "./Game.js"
const game = new Game(["Alice", "Bob", "Charlie", "Diana"])

// Display initial hands
for (const player of game.players) {
  console.log(`${player.name}'s hand: ${player.showHand()}`)
}

// Simulate a turn (e.g., Alice plays the first card in her hand)
game.playTurn(0)

// Display updated hands
for (const player of game.players) {
  console.log(`${player.name}'s hand: ${player.showHand()}`)
}

while (!game.gameOver) {
  game.playTurn(
    Math.floor(
      Math.random() * game.players[game.currentPlayerIndex].hand.length,
    ),
  )
  for (const player of game.players) {
    console.log(`${player.name}'s hand: ${player.showHand()}  \n`)
  }
}
