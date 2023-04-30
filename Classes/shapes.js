// creating parent Shape class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Bootcamp tutor John Titus helped me come up with the method for creating the shapes
// creating child Triangle class and inheriting properties
class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // add method for creating specific shape
  createShape(data) {
    return `<polygon points="150 15 15 185 285 185" fill = "${data.shapeColor}"/>`
  }
}


// creating child Circle class and inheriting properties
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // add method for creating a circle shape
  createShape(data) {
    return `<circle cx="150" cy="100" r="75" fill="${data.shapeColor}"/>`
  }
}

// creating child Square class and inheriting properties
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // add method for creating a square shape
  createShape(data) {
    return `<rect x="75" y="25" width="150" height="150" fill="${data.shapeColor}"/>`
  }
}



module.exports = {Triangle, Circle, Square}