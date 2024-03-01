const Triangle = require("./shapes.js");

describe("Triangle", () => {
    describe("render", () => {
        it("should make a blue triangle", () =>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
});