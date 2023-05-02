# Make an SVG Logo
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Using Inquirer and node, I have created a command-line interface that creates a simple SVG logo based on user input. Part of my previous job as a brand specialist was to create logos for clients using Adobe Photoshop and Illustrator. While Adobe offers great products, the technology can be expensive and difficult to use for beginners. My app allows users to quickly generate logos without needing any graphic design skills or software.

Users will run node in their terminal and answer four questions indicating what shape, shape color, text, and text color they want for their logo. Once all questions have been answered, an SVG logo will be created automatically. If using the [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg), the SVG files can be exported and saved as PNGs.

This application challenged me to use classes and subclasses for the first time as well as Jest to test each class to ensure that the code executed correctly. To test my color inputs, I used the [Validate-Color Package](https://www.npmjs.com/package/validate-color) which greatly helped with validating hex code colors and keywords.

Link to video demo: https://drive.google.com/file/d/1kIua2Z3UugiK05y2W63zfEkdkyG_hFKF/view?usp=sharing

Taylor Swift-themed sample logos:

![Square](assets/sqare.png)
![Circle](assets/circle.png)
![Triangle](assets/triangle.png)
![Triangle2](assets/fear.png)

SVG file examples can be found in /Classes/examples.  

## Installation
1. Copy the SSH key in my GitHub repo and paste `git clone <SSHKEY>` in your terminal to create a local copy on your computer\
OR
2. Download the zip file and manually copy the files to your computer
3. Install node by copying and pasting the code `npm init -y` in your terminal
4. Install the inquirer package by copying and pasting the code `npm i inquirer@8.2.4` in your terminal
5. Install jest by copying and pasting the code `npm install --save-dev jest`
6. *Optional* Download the[SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg) to export your SVG file as a PNG file.

## Usage
1. Open the index.js file in your terminal\
*Note*: Make sure you have installed the necessary applications! 
2. Run `node index.js` to start the application 
3. Type in answers to each question
4. Once you've answered the final question, a SVG file titled "logo.svg" will be created

## Credits 
- [Inquirer Package](https://www.npmjs.com/package/inquirer/v/8.2.4)
- [Jest Package](https://www.npmjs.com/package/jest)
- [Validate-Color Package](https://www.npmjs.com/package/validate-color) for validating colors
- [mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started) for how to write SVG files and getting the coordinates for shapes
- [codepen](https://codepen.io/pen/) to test what my image would look like
- Bootcamp tutor John Titus helped me come up with the method for creating the shapes and made sure I was writing the class constructors correctly
- Bootcamp TA Ian Darland helped me troubleshoot my test for my shape and shape color

## License
MIT License