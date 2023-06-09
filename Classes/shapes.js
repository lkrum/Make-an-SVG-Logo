// creating parent Shape class
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
   
  }
}

// Bootcamp tutor John Titus helped me come up with the method for creating the shapes
// creating child Triangle class and inheriting properties
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  // method for creating triangle shape
  createShape() {
    return `<polygon points="150 15 15 185 285 185" fill="${this.shapeColor}"/>`
  }
}

// creating child Circle class and inheriting properties
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // method for creating a circle shape
  createShape() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>`
  }
}

// creating child Square class and inheriting properties
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // method for creating a square shape
  createShape() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`
  }
}


// exporting the children classes
module.exports = { Triangle, Circle, Square }