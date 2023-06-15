const questions = [
  {
    type: "list",
    name: "shape",
    message: "What Shape do you want to draw",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "text",
    message: "What text do you want inside the shape(enter upto 3 characters) ",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What should be the colour of the text?(enter name of the colour or color hashtag)",
  },
  {
    type: "input",
    name: "fill",
    message:
      "What background colour you want the shape to have?(enter name of the colour or color hashtag)",
  },
  {
    type: "input",
    name: "stroke",
    message:
      "What color of shape boundary should be?(enter name of the colour or color hashtag)",
  },
  {
    type: "number",
    name: "strokeWidth",
    message: "How thick the border be?(choose a value between 1-5)",
  },
  // if circle is selected as option
  {
    type: "input",
    name: "radius",
    message: "Radius of circle?(choose a value between 50-200)",
    when: (answers) => answers.shape === "Circle",
  },

  // if square is selected as option
  {
    type: "input",
    name: "width",
    message: "How wide square should be?(choose a value between 100-400)",
    when: (answers) => answers.shape === "Square",
  },
];

// exporting module
module.exports = questions;
