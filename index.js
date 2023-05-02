const questions = require('./shapes/shape-questions');
const SVG = require('SVG');
const {Circle, Square, Triangle} = require('./shapes/shapes');
const fs = require('fs');

const {text, shape, textColor, shapeColor, filename} = answer;

let logo;
    switch (shape) {
        case 'Circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'Square':
            logo = new Square(text, textColor, shapeColor);
            break;
        case 'Triangle':
            logo = new Triangle(text, textColor, shapeColor);
            break;
        default:
            throw new Error('Invalid shape');
    }

const logoCode = log.render();

const outputPath = path.join('./', `${filename}.svg`);

await writeFile(outputPath, logoCode);
console.log('Created SVG logo');
{
    console.error(error);
}
