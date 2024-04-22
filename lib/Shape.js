class Shape {
  constructor(logoText, textColor, shapeColor, Shape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = Shape;
  }

  drawShape() {
    return `<polygon fill=${this.shapeColor}>  

    </polygon>`
  }
}

module.exports = Shape;