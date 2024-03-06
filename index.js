const inquirer = require('inquirer');
const fs = require('fs');
const Rectangle = require('./lib/shapes.js').Rectangle;
const Triangle = require('./lib/shapes.js').Triangle;
const Circle = require("./lib/shapes.js").Circle;

const logoData = {
    
}

// sets up the questions the user will answer
inquirer
    .prompt([
        {
            type: "input",
            message: "What text should your logo have? Max of 3 characters.",
            name: "text"
        },
        {
            type: "input",
            message: "What color should your text be? Type name of color or hex number starting with #.",
            name: "textColor"
        },
        {
            type: "input",
            message: "What size should your text be?",
            name: "fontSize"
        },
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
            message: "What color should the shape be? Type name of color or hex number starting with #.",
            name: "shapeColor"
        }
    ])
    .then((response) => {
        if(response.text.length > 3){
            response.text = response.text.substring(0, 3);
        }
        logoData.text = response.text;
        logoData.textColor = response.textColor;
        logoData.fontSize = response.fontSize;
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
            case "Rectangle":
                rectangleQuestions();
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

function rectangleQuestions(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What should the coordinates of the top left corner of the rectangle be? Put a space between the x and y.",
            name: "coords"
        },
        {
            type: "input",
            message: "What should the width and the height of your rectangle be? Put a space between the x and y.",
            name: "shapeSize"
        }
    ])
    .then((response) => {
        logoData.coords = response.coords;
        logoData.shapeSize = response.shapeSize;
        createLogo(logoData);
    });
}

function createLogo(data){
    const shape = chooseShape(data);
    shape.setColor(data.color);
    let size = data.size.split(" ");
    let output = `<svg version="1.1" width="${size[0]}" height="${size[1]}" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${createText(data)}

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
        case "Rectangle":
            let rectangle = new Rectangle;
            let rectCoords = data.coords.split(" ");
            rectangle.setPos(rectCoords[0], rectCoords[1]);
            let rectSize = data.shapeSize.split(" ");
            rectangle.setSize(rectSize[0], rectSize[1]);
            return rectangle;
    }
}

function createText(data){
    let size = data.size.split(" ");
    let xPos = Number(size[0]) / 2;
    let yPos = Number(size[1]) / 2;
    return `<text x="${xPos}" y="${yPos}" fill="${data.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${data.fontSize}">${data.text}</text>`
}

module.exports = createLogo;