const Shape = require("./Shape");

class Square extends Shape {
  constructor(logoText, textColor, shapeColor, shape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    super.shape = "triangle";
  }
}

module.exports = Square;
