const {SVG} = require('../SVG');

class Square extends SVG {
    constructor(text, textColor, shapeColor) {
      super(text, 'rect', textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} fill="${this.shapeColor}" />
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
          ${this.text}
        </text>
      </svg>`;
    }
  }

class Circle extends SVG {
    constructor(text, textColor, shapeColor) {
      super(text, 'circle', textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} fill="${this.shapeColor}" />
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
          ${this.text}
        </text>
      </svg>`;
    }
  }

class Triangle extends SVG {
    constructor(text, textColor, shapeColor) {
      super(text, 'polygon', textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <${this.shape} fill="${this.shapeColor}" />
        <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="30">
          ${this.text}
        </text>
      </svg>`;
    }
  }

module.exports = {Circle, Square, Triangle}