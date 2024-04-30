const Shape = require("./Shape");

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor, shape) {
    super(logoText, textColor, Shape, shapeColor);
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    super.shape = "triangle";
  }
}

Triangle.prototype.render = function () {
  return `<svg width="300" height="200">
  <polygon points="90, 10, 10, 200 200, 200" style="${this.shapeColor}"
  stroke-width="3" fill= "${this.shapeColor}"/>
  <text x="85" y="140"
  fill="${this.textColor}">${this.logoText}</text>
  </svg>`;
};

module.exports = Triangle;
