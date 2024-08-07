export class Card {
  constructor(color, value) {
    this.color = color // red, green, blue, yellow, or special
    this.value = value // 0-9, skip, reverse, draw2, wild, wildDraw4
  }

  isSpecial() {
    return ["skip", "reverse", "draw2", "wild", "wildDraw4"].includes(
      this.value,
    )
  }

  hasColor() {
    return this.color !== "special"
  }

  isntSpecial() {
    return !this.isSpecial()
  }

  matches(otherCard) {
    return this.color === otherCard.color || this.value === otherCard.value
  }

  toString() {
    return `${this.color} ${this.value}`
  }
}
