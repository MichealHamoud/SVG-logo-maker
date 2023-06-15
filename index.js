const fs = require("fs");
const inquirer = require("inquirer");
const { Shapes, Circle, Polygon, Square } = require("./main/lib/shapes.js");
const questions = require("./main/lib/questions");

// intialising function using switch method

const init = () => {
  inquirer.prompt(questions).then((data) => {
    console.log("Creating svg file...");
    switch (`${data.shape}`) {
      case "Square":
        console.log("Square is being Created....");
        const square = new Square(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.text,
          data.textColor,
          data.width,
          data.width
        );
        fs.writeFile("main/output/logo.svg", square.renderSquare(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Congratulations!!! Square is now created!!");
          }
        });
        break;
      case "Circle":
        console.log("Circle is being Created....");
        const circle = new Circle(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.textColor,
          data.text,
          data.radius
        );
        fs.writeFile("main/output/logo.svg", circle.renderCircle(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Congratulations!!! Circle is now created!!");
          }
        });
        break;
      case "Triangle":
        console.log("Triangle is being Created....");
        const triangle = new Polygon(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.text,
          data.textColor
        );
        fs.writeFile(
          "main/output/logo.svg",
          triangle.renderPolygon(),
          (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Congratulations!!! Triangle is  now created!!");
            }
          }
        );
        break;
    }
  });
};
// Initialising app

init();
