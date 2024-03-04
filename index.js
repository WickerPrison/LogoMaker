const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/shapes.js").Circle;

const logoData = {
    
}

// sets up the questions the user will answer
inquirer
    .prompt([
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
        logoData.shape = response.shape;
        logoData.color = response.shapeColor;
        switch(response.shape){
            case "Circle":
                circleQuestions();
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
        }
    ])
    .then((response) => {
        logoData.radius = response.radius;
        createLogo(logoData);
    });
}


function createLogo(data){
    console.log(data);
}
