const Shape = require('./Shape');

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor, shape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    super.shape = "triangle";
  }

}


module.exports = Triangle;