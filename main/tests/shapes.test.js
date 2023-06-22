const { Shapes, Circle, Polygon, Square } = require("../lib/shapes");

// test for Shapes class
describe("Shapes", () => {
  test("should create a new instance of Shapes class", () => {
    const shape = new Shapes("#000", "#fff", 2, "#fff", "Hello");
    expect(shape.fill).toBe("#000");
    expect(shape.stroke).toBe("#fff");
    expect(shape.strokeWidth).toBe(2);
    expect(shape.text).toBe("Hello");
    expect(shape.textColor).toBe("#fff");
  });

  test("should set the text properly", () => {
    const shape = new Shapes("#000", "#fff", 2, "#fff", "Hello");
    expect(shape.setText()).toBe(
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="#fff">Hello</text>'
    );
  });
});

// test for circle class
describe("Circle", () => {
  test("should create a new instance of Circle class", () => {
    const circle = new Circle("#000", "#fff", 2, "#fff", "Hello", 50);
    expect(circle.fill).toBe("#000");
    expect(circle.stroke).toBe("#fff");
    expect(circle.strokeWidth).toBe(2);
    expect(circle.text).toBe("Hello");
    expect(circle.textColor).toBe("#fff");
    expect(circle.radius).toBe(50);
  });

  test("should render a circle with the provided attributes and text", () => {
    const circle = new Circle("#000", "#fff", 2, "#fff", "Hello", 50);
    expect(circle.renderCircle()).toBe(
      '<svg version="1.1"\n  width="500" height="500"\n    xmlns="http://www.w3.org/2000/svg">\n    <circle r="50" cx="250" cy="250" fill="#000" stroke="#fff" stroke-width="2"/>\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="#fff">Hello</text>\n    </svg>'
    );
  });
});

// test for polygon class
describe("Polygon", () => {
  test("should create a new instance of Polygon class", () => {
    const polygon = new Polygon("#000", "#fff", 2, "Hello", "#fff");
    expect(polygon.fill).toBe("#000");
    expect(polygon.stroke).toBe("#fff");
    expect(polygon.strokeWidth).toBe(2);
    expect(polygon.text).toBe("Hello");
    expect(polygon.textColor).toBe("#fff");
  });

  test("should render a polygon with the provided attributes and text", () => {
    const polygon = new Polygon("#000", "#fff", 2, "Hello", "#fff");
    expect(polygon.renderPolygon()).toBe(
      '<svg version="1.1"\n    width="500" height="500"\n    xmlns="http://www.w3.org/2000/svg">\n    <polygon points="250,60 100,400 400,400" stroke="#fff" stroke-width="2" fill="#000" />\n    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="#fff">Hello</text>\n    </svg>'
    );
  });
});

// test for square class
describe("Square", () => {
  test("should create a new instance of Square class", () => {
    const square = new Square("#000", "#fff", 2, "Hello", "#fff", 400, 400);
    expect(square.fill).toBe("#000");
    expect(square.stroke).toBe("#fff");
    expect(square.strokeWidth).toBe(2);
    expect(square.text).toBe("Hello");
    expect(square.textColor).toBe("#fff");
    expect(square.width).toBe(400);
    expect(square.height).toBe(400);
  });
  test("should render a square with the provided attributes and text", () => {
    const square = new Square("#000", "#fff", 2, "Hello", "#fff", 400, 400);
    expect(square.renderSquare()).toBe(
      '<svg version="1.1"\n    width="500" height="500"\n    xmlns="http://www.w3.org/2000/svg">\n    <rect width="400" height="400" fill="#000" stroke="#fff" stroke-width="2"/>\n    <text x="200" y="200" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="#fff">Hello</text>\n    </svg>'
    );
  });
});
