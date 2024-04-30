const Shape = require("./Shape");

class Square extends Shape {
  constructor(logoText, textColor, shapeColor, shape) {
    super(logoText, textColor, Shape, shapeColor);
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    super.shape = "square";
  }
}

Square.prototype.render = function () {
  return `<svg width="300" height="200">
  <rect width="250" height="250" stroke="${this.shapeColor}"
  stroke-width="3" fill= "${this.shapeColor}"/>
  <text x="119" y="99"
  fill="${this.textColor}">${this.logoText}</text>
  </svg>`;
};

module.exports = Square;
