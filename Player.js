export class Player {
  constructor(name) {
    this.name = name
    this.hand = []
  }

  drawCard(deck) {
    this.hand.push(deck.draw())
  }

  playCard(cardIndex) {
    return this.hand.splice(cardIndex, 1)[0]
  }

  showHand() {
    return this.hand.map((card) => card.toString()).join(", ")
  }
}
