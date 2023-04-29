// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./Classes/shapes');


// function to create logo based on user input
function generateLogo(data) {
 data.text


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
    generateLogo(data);
    fs.writeFile('example.svg', logoOutput, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  });
