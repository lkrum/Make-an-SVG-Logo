const {Triangle} = require('./shapes');
const validateColor = require("validate-color").default;

// testing triangle shape functionality
describe('shape testing', () => {
  describe('triangle', () => {
    it('should take in shape and color inputs and generates expected result', () => {
      const shape = new Triangle();
      shape.setColor("pink");
      expect(shape.render()).toEqua('<polygon points="150 15 15 185 285 185" fill="pink"/>');
    });
  });
});

