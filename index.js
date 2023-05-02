const filesystem = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shapes");
const questions = require('./shapes/shape-questions');

class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            reject(err);
            return;
        }
        console.log("Congratulations, you have Generated a logo.svg!");

        resolve({
            ok:true
        })
    
    });
})};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// Function call to initialize app
init();