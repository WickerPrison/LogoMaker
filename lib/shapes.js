function Shape(){
    this.color = "white";
    this.sizeX = 100;
    this.sizeY = 100;
    this.setColor = function(color) {
        this.color = color;
    }
    this.setSize = function(sizeX, sizeY){
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
}

function Triangle(){
    Shape.call(this);
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 50;
    this.y2 = 100;
    this.x3 = 100;
    this.y3 = 0;
    this.setPoints = function(x1, y1, x2, y2, x3, y3){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    this.render = function(){
        return `<polygon points="${this.x1}, ${this.y1} ${this.x2}, ${this.y2} ${this.x3}, ${this.y3}" fill="${this.color}" />`;
    }
}

function Circle(){
    Shape.call(this);
    this.radius = 50;
    this.setRadius = function(radius){
        this.radius = radius;
    }
    this.render = function(){
        return `<circle cx="${this.sizeX}" cy="${this.sizeY}" r="${this.radius}" fill="${this.color}"/>`;
    }
}

module.exports = {
    Triangle,
    Circle
};