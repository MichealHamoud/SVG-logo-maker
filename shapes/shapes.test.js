const {Circle, Square, Triangle} = require("./shapes").default
//circle shape
describe('Circle', () => {
    test('render correctly', () => {
        const shape = new Circle();
        let color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}">`);
    });
});
//square shape
describe('square', () => {
    test('render correctly', () => {
        const shape = new Square();
        let color =('turquoise')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="${color}">`);
    });
});
//triangle shape
describe('triangle', () => {
    test('render correctly', () => {
        const shape = new Triangle();
        let color =('bisque')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}">`);
    });
});