class Shape {
  constructor(logoText, textColor, shape, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  drawShape() {
    return `<polygon fill=${this.shapeColor}>  

    </polygon>`
  }
}

module.exports = Shape;