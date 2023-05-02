const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
        validate:(value) =>
        value.length >= 3
        ? true
        : "Text Must Contain 3 letters.",
    },
    {
        type: "choice",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (Or hexadecimal number):",
        default: "#000000"
    },
    {
        type: "choice",
        name: 'shapeColor',
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
        default: "#ffffff"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which Shape Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: 'filename',
        message: 'please enter the name of the file to save the logo',
        default: 'logo',
    },
];

module.exports = questions