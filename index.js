const questions = require('./shapes/shape-questions');
const inquirer = require('inquirer');
const {SVG} = require('./SVG');
const {Circle, Square, Triangle} = require('./shapes/shapes');
const fs = require('fs');
const createShape = (shape, shapeColor, text, textColor) => {
    let shapeSVG = [];
    switch (shape) {
    case 'circle':
        shapeSVG = new Circle();
        break;
    case 'triangle':
        shapeSVG = new Triangle();
        break;
    case 'square':
        shapeSVG = new Square();
        break;
    }
    shapeSVG.setColor(shapeColor);

    const textSVG = new Text(text, textColor);

    const svg = new SVG(textSVG, shapeSVG);

    return svg.render();
}

inquirer.prompt(questions).then((answers) => {

    const {shape, shapeColor, text, textColor} = answers;

    const svg = createShape(shape, shapeColor, text, textColor);

    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
});