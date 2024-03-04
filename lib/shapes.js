function Shape(){
    this.color = "white";
    this.sizeX = 100;
    this.sizeY = 100;
    this.setColor = function(color) {
        this.color = color;
    }
}

function Triangle(){
    Shape.call(this);
    this.coords = [0, 0, 50, 100, 100, 0];
    this.setPoints = function(coords){
        this.coords = coords;
    }
    this.render = function(){
        return `<polygon points="${this.coords[0]}, ${this.coords[1]} ${this.coords[2]}, ${this.coords[3]} ${this.coords[4]}, ${this.coords[5]}" fill="${this.color}" />`;
    }
}

function Circle(){
    Shape.call(this);
    this.radius = 50;
    this.setRadius = function(radius){
        this.radius = radius;
    }
    this.setPos = function(posX, posY){
        this.posX = posX;
        this.posY = posY;
    }
    this.render = function(){
        return `<circle cx="${this.posX}" cy="${this.posY}" r="${this.radius}" fill="${this.color}"/>`;
    }
}

function Rectangle(){
    Shape.call(this);
    this.posX = 50;
    this.posY = 50;
    this.width = 100;
    this.height = 100;
    this.setPos = function(posX, posY){
        this.posX = posX;
        this.posY = posY;
    }
    this.setSize = function(width, height){
        this.width = width;
        this.height = height;
    }
    this.render = function(){
        return `<rect x="${this.posX}" y="${this.posY}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Rectangle
};