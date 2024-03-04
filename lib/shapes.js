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
    this.setPoints = function(x1, y1, x2, y2, x3, y3){
        
    }
    this.render = function(){
        return "";
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