// creating parent Shape class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// // creating child Triangle class and inheriting properties
// class Triangle extends Shape {
//     super(shapeColor)
//     // add method for creating specific shape
//     createShape() {

//       return 
//     }
//   }


// creating child Circle class and inheriting properties
// Tutor John Titus helped me come up with the method for creating the shapes
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  // add method for creating specific shape
  createShape(data) {
    return `<circle cx = "150" cy = "100" r = "75" fill = "${data.shapeColor}" />`
  }
}

// // creating child Square class and inheriting properties
// class Square extends Shape {
//     super(shapeColor)
//     // add method for creating specific shape
// }



module.exports = {Circle}