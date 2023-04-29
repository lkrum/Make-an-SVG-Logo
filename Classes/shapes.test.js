const shapeTest = require('./shapes');


// testing triangle shape functionality
describe('shape testing', () => {
  describe('triangle', () => {
    it('should take in user shape and color inputs and generates expected result', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect().toEqua('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});

