function Shape(color){
    this.color = color;
    this.setColor = function(color) {

    }
}

function Triangle(color){
    Shape.call(this, color);
    this.render = function(){
        return "";
    }
}

module.exports = Triangle;