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
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (Or hexadecimal number):",
    },
    {
        type: 'list',
        name: 'shape',
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which Shape Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'filename',
        message: 'please enter the name of the file to save the logo',
        default: 'logo',
    },
];

module.exports = questions