const Shape = require("./Shape")

class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, Shape, shapeColor);
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    super.shape = "circle";
  }
}
Circle.prototype.render = function () {
  return `<svg width="300" height="200">
  <circle cx= "150" cy="100" r="90" stroke="${this.shapeColor}"
  stroke-width="3" fill= "${this.shapeColor}"/>
  <text x="135" y="100"
  fill="${this.textColor}">${this.logoText}</text>
  </svg>`
}
// const myCircle = new Circle("ACD", "blue", "red");
// console.log(myCircle);
module.exports = Circle;
