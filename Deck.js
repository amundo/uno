import { Card } from "./Card.js"
export class Deck {
  constructor() {
    this.cards = []
    this.initializeDeck()
    this.shuffle()
  }

  initializeDeck() {
    const colors = ["red", "green", "blue", "yellow"]
    const values = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "skip",
      "reverse",
      "draw2",
    ]

    // Add number cards, skips, reverses, and draw2s
    colors.map((color) =>
      values.map((value) => {
        this.cards.push(new Card(color, value))
        if (value !== "0") {
          this.cards.push(new Card(color, value)) // two of each except 0
        }
      })
    )

    // Add special wild and wildDraw4 cards
    for (let i = 0; i < 4; i++) {
      this.cards.push(new Card("wild", "wild"))
      this.cards.push(new Card("wild", "wildDraw4"))
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  draw() {
    return this.cards.pop()
  }
}
