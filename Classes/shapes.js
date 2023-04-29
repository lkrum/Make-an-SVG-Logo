// creating parent Shape class
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// creating child Triangle class and inheriting properties
class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}

// creating child Circle class and inheriting properties
class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}

// creating child Square class and inheriting properties
class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}



module.exports = {Shape, Triangle, Circle, Square}