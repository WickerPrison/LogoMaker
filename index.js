const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes.js').Triangle;
const Circle = require("./lib/shapes.js").Circle;

const logoData = {
    
}

// sets up the questions the user will answer
inquirer
    .prompt([
        {
            type: "input",
            message: "What width and height should your logo have? Put a space between the x and y values.",
            name: "size"
        },
        {
            type: "list",
            message: "What shape should your logo have?",
            name: "shape",
            choices:[
                {name: "Circle", value: "Circle"},
                {name: "Rectangle", value: "Rectangle"},
                {name: "Triangle", value:"Triangle"},
            ]
        },
        {
            type: "input",
            message: "What color should the shape be?",
            name: "shapeColor"
        }
    ])
    .then((response) => {
        logoData.size = response.size;
        logoData.shape = response.shape;
        logoData.color = response.shapeColor;
        switch(response.shape){
            case "Circle":
                circleQuestions();
                break;
            case "Triangle":
                triangleQuestions();
                break;
        }
    });

function circleQuestions(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What should the radius of the circle be?",
            name: "radius"
        },
        {
            type: "input",
            message: "What should the coordinates of the center of the circle be? Put a space between the x and y.",
            name: "coords"
        }
    ])
    .then((response) => {
        logoData.radius = response.radius;
        logoData.coords = response.coords;
        createLogo(logoData);
    });
}

function triangleQuestions(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Give the coordinates for the three points of the triangle. Put a space between each number.",
            name: "coords"
        }
    ])
    .then((response) => {
        logoData.coords = response.coords;
        createLogo(logoData);
    });
}

function createLogo(data){
    const shape = chooseShape(data);
    shape.setColor(data.color);
    let size = data.size.split(" ");
    let output = `<svg version="1.1" width="${size[0]}" height="${size[1]}" xmlns="http://www.w3.org/2000/svg">
    
    ${shape.render()}

</svg>`;
    fs.writeFile("logo.svg", output, function(err){
        if(err){
            return console.log(err);
        }
    });
}

function chooseShape(data){
    switch(data.shape){
        case "Circle":
            let circle = new Circle;
            circle.setRadius(data.radius);
            let coords = data.coords.split(" ");
            circle.setPos(coords[0], coords[1]);
            return circle;
        case "Triangle":
            let triangle = new Triangle;
            let trianglePoints = data.coords.split(" ");
            triangle.setPoints(trianglePoints);
            return triangle;
    }
}

module.exports = createLogo;