const Triangle = require("./shapes.js").Triangle;
const Circle = require("./shapes.js").Circle;

describe("Triangle", () => {
    describe("render", () => {
        it("should make a blue triangle", () =>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
});

describe("Circle", () => {
    describe("render", () => {
        it("should make a blue circle", () => {
            const shape = new Circle();
            shape.setColor("blue");
            shape.setSize(75, 45);
            shape.setRadius(23);
            expect(shape.render()).toEqual("<circle cx=\"75\" cy=\"45\" r=\"23\" fill=\"blue\"/>")
        });
    });
});