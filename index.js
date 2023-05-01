// To do:
// create a function that lets user input text choices (DONE)
// create a function that generates a logo based on user's inputs (DONE)
// test the function with Jest

const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./Classes/shapes');


// function to create logo based on user input
function generateLogo(data) {
// function for creating a circle
  if (data.shape == "circle") {
    var shape = new Circle();
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.createShape(data)}
  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  </svg>`
  // function for creating a triangle
  } if (data.shape == "triangle") {
    var shape = new Triangle ();
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.createShape(data)}
    <text x="150" y="155" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`
// function for creating a square
  } if (data.shape == "square") {
    var shape = new Square();
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.createShape(data)}
  <text x="150" y="120" font-size="65"  fill="${data.textColor}" text-anchor="middle">${data.text}</text>
  </svg>`
  }
}

// prompts
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters for your logo text.',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter a text color (either a keyword or hexadecimal number).',
      name: 'textColor',
    },
    {
      type: 'checkbox',
      message: 'Choose a shape for your logo',
      choices: ['circle', 'triangle', 'square'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Enter a shape color (either a keyword or hexadecimal number).',
      name: 'shapeColor',
    },
  ])

  .then((data) => {
    const logoOutput = generateLogo(data);
    fs.writeFile('logo.svg', logoOutput, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
