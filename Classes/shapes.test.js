const { Triangle, Circle, Square } = require('./shapes');

const validateColor = require("validate-color").default;

// shape testing -- Ian (TA) helped me get this function to work
// testing triangle shape functionality
describe('shape testing', () => {
  describe('triangle', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Triangle('pink');
      shape.createShape();
      expect(shape.createShape('pink')).toEqual('<polygon points="150 15 15 185 285 185" fill="pink"/>');
    });
  });
});

// testing circle shape functionality
describe('shape testing', () => {
  describe('circle', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Circle('blue');
      shape.createShape();
      expect(shape.createShape('blue')).toEqual('<circle cx="150" cy="100" r="75" fill="blue"/>');
    });
  });
});

// testing square shape functionality
describe('shape testing', () => {
  describe('square', () => {
    it('should take in shape and color inputs and generate expected result', () => {
      const shape = new Square('green');
      shape.createShape();
      expect(shape.createShape('green')).toEqual('<rect x="75" y="25" width="150" height="150" fill="green"/>');
    });
  });
});

// testing for text length
// created function for string length
function checkTextLength(text) {
  if (text.length > 3) {
    throw new Error('Text must be fewer than 4 characters long.');
  } else {
    console.log('yay! Text is the right length')
  }
}
// testing that strings over 3 characters in length return a throw error
describe('text testing', () => {
  describe('string length over 3', () => {
    it('should take in text input and throw an error if text length is over 3 characters', () => {
      const cb = () => checkTextLength('TaylorSwift');
      const err = new Error('Text must be fewer than 4 characters long.');
      expect(cb).toThrowError(err);
    });
  });
})

// testing that strings fewer than 3 characters in length pass
describe('text testing', () => {
  describe('string length under 3', () => {
    it('should take in text input and console.log if text length is under 3 characters', () => {
      const text = checkTextLength('tay');
      const pass = console.log('yay! Text is the right length');
      expect(text).toEqual(pass);
    });
  });
})

// function to validate the color input
function validColor(color) {
  if (validateColor(color) == undefined) {
    console.error('Not a valid color.')
  } else {
    console.log('What a beautiful color!')
  }
}

// validating that a real hex code passes
describe('color testing', () => {
  describe('colors', () => {
    it('should take in a color input and validate it', () => {
      const colorCheck = validColor('#ffc0ca')
      const pass = console.log('What a beautiful color!')
      expect(colorCheck).toEqual(pass);
    });
  });
})

// validating that a real color keyword passes
describe('color testing', () => {
  describe('colors', () => {
    it('should take in a color input and validate it', () => {
      const colorCheck = validColor('aquamarine')
      const pass = console.log('What a beautiful color!')
      expect(colorCheck).toEqual(pass);
    });
  });
})

// validating that an invalid color hexcode fails
describe('color testing', () => {
  describe('colors', () => {
    it('should take in a color input and validate it', () => {
      const colorCheck = validColor('#8A2tBE2')
      const fail = console.log('Not a valid color.')
      expect(colorCheck).toEqual(fail);
    });
  });
})

// validating that an invalid color keyword fails
describe('color testing', () => {
  describe('colors', () => {
    it('should take in a color input and validate it', () => {
      const colorCheck = validColor('blueTay')
      const fail = console.log('Not a valid color.')
      expect(colorCheck).toEqual(fail);
    });
  });
})