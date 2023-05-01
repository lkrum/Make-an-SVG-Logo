const {Triangle, Circle, Square} = require('./shapes');

// const validateColor = require("validate-color").default;

// testing triangle shape functionality
// Ian: test to see if shape testing renders appropriate shape
describe('shape testing', () => {
  describe('triangle', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Triangle("pink");
      shape.createShape();
      expect(shape.createShape("pink")).toEqual('<polygon points="150 15 15 185 285 185" fill="pink"/>');
    });
  });
});

// testing circle shape functionality
describe('shape testing', () => {
  describe('circle', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Circle("blue");
      shape.createShape();
      expect(shape.createShape("blue")).toEqual('<circle cx="150" cy="100" r="75" fill="blue"/>');
    });
  });
});

// testing square shape functionality
describe('shape testing', () => {
  describe('square', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Square("green");
      shape.createShape();
      expect(shape.createShape("green")).toEqual('<rect x="75" y="25" width="150" height="150" fill="green"/>');
    });
  });
});