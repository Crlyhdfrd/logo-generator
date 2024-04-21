const Shape= require("./Shape")

class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shape, shapeColor);
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = "circle";
  }

  
}

const myCircle = new Circle("ACD", "blue", "red");
console.log(myCircle);
module.exports = Shape;
