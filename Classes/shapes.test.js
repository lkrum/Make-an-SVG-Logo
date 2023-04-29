const shapeTest = require('./shapes');

  describe('BlogPost', () => {
    // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
    describe('author length property', () => {
      it('takes in authorName provided and throws and error if name is less than 2 characters long', () => {
        const cb = () => new BlogPost('t');
        const err = new Error('Author must be at least 2 characters long.');
        expect(() => new BlogPost("v")).toThrowError(err);
      });
    })


    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');