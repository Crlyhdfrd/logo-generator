class Shape {
  constructor(logoText, textColor, shapeColor, Shape) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = Shape;
  }

  drawShape() {
    return `<polygon fill=${this.shapeColor}, ${this.Shape}>  
    <text fill=${this.textColor}>${this.logoText}</text>
    </polygon>`
  }
  getlogotext() {
    return this.logoText;
  }
  setlogoText(logoText) {
    this.logoText = logoText;
  }
  getTextcolor() {
    return this.textColor;
  }

  setTextcolor(textColor) {
    this.textColor = textColor;
  }

  getShapecolor() {
    return this.shapeColor;
  }

  setShapecolor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  getShape() {
    return this.Shape;
  }

  setShape(Shape) {
    this.Shape = Shape;
  }
}

  // drawShape() {
  //   return <circle fill=${this.shapeColor}, ${this.Shape}>
//     <text fill=${this.textColor}>${this.logoText}</text>
//     </circle>
//   }
//   drawShape() {
//     return <square fill=${this.shapeColor}, ${this.Shape}>
//     <text fill=${this.textColor}>${this.logoText}</text>
//     </square>
//   }
//   drawShape() {
//     return <triangle fill=${this.shapeColor}, ${this.Shape}>
//     <text fill=${this.textColor}>${this.logoText}</text>
//     </triangle>
//   }
// }

module.exports = Shape;
