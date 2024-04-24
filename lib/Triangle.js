const Shape = require('./Shape');

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
  <polygon points="100, 0, 300, 200 200, 300" style="${this.shapeColor}"
  stroke-width="3" fill= "${this.shapeColor}"/>
  <text x="90" y="190"
  fill="${this.textColor}">${this.logoText}</text>
  </svg>`;
};

module.exports = Triangle;