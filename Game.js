import { Deck } from "./Deck.js"
import { Player } from "./Player.js"

export class Game {
  constructor(players) {
    this.deck = new Deck()
    this.players = players.map((name) => new Player(name))
    this.discardPile = []
    this.currentPlayerIndex = 0
    this.direction = 1 // 1 for clockwise, -1 for counter-clockwise

    // Initial card distribution
    this.dealInitialCards()

    // Start the discard pile with one card
    this.discardPile.push(this.deck.draw())
  }

  dealInitialCards() {
    for (let i = 0; i < 7; i++) {
      for (const player of this.players) {
        player.drawCard(this.deck)
      }
    }
  }

  checkWin(player) {
    if (player.hand.length === 0) {
      console.log(`${player.name} wins!`)
    }
  }

  playTurn(cardIndex) {
    const player = this.players[this.currentPlayerIndex]
    const card = player.playCard(cardIndex)
    this.discardPile.push(card)
    this.handleCardEffect(card)
    this.gameOver = this.checkWin(player)
    if (!this.gameOver) {
      this.nextPlayer()
    }
  }

  handleCardEffect(card) {
    if (card.value === "skip") {
      this.nextPlayer()
    } else if (card.value === "reverse") {
      this.direction *= -1
    } else if (card.value === "draw2") {
      this.nextPlayer()
      this.players[this.currentPlayerIndex].drawCard(this.deck)
      this.players[this.currentPlayerIndex].drawCard(this.deck)
    } else if (card.value === "wildDraw4") {
      this.nextPlayer()
      for (let i = 0; i < 4; i++) {
        this.players[this.currentPlayerIndex].drawCard(this.deck)
      }
    }
  }

  nextPlayer() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + this.direction + this.players.length) %
      this.players.length
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex]
  }
}
