const Triangle = require("./shapes.js").Triangle;
const Circle = require("./shapes.js").Circle;
const Rectangle = require("./shapes.js").Rectangle;

describe("Triangle", () => {
    describe("render", () => {
        it("should make a blue triangle", () =>{
            const shape = new Triangle();
            shape.setColor("blue");
            shape.setPoints([150, 18, 244, 182, 56, 182]);
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
});

describe("Circle", () => {
    describe("render", () => {
        it("should make a blue circle", () => {
            const shape = new Circle();
            shape.setColor("blue");
            shape.setPos(75, 45);
            shape.setRadius(23);
            expect(shape.render()).toEqual("<circle cx=\"75\" cy=\"45\" r=\"23\" fill=\"blue\"/>")
        });
    });
});

describe("Rectangle", () => {
    describe("render", () =>{
        it("should make a blue rectangle", () => {
            const shape = new Rectangle();
            shape.setColor("blue");
            shape.setPos(50, 25);
            shape.setSize(100, 50);
            expect(shape.render()).toEqual("<rect x=\"50\" y=\"25\" width=\"100\" height=\"50\" fill=\"blue\"/>")
        })
    })
})