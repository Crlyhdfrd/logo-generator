const fs = require("fs");
const Circle  = require("./lib/Circle.js");
const Triangle = require("./lib/Triangle.js");
const Square = require("./lib/Square.js");

const shapes = {
  circle: Circle,
  triangle: Triangle,
  square: Square
}
function main() {
  userInput().then((answers) => {
    var Shape = new shapes[answers.logoShape](answers.brandName, answers.textColor, answers.ShapeColor);
   
    var content = Shape.render();
  fs.writeFileSync("examples/logo.svg", content);
    console.log(answers);
  });
}

function writeSvgFile(Shape) {
  // const { createSVGWindow } = await import("svgdom");
  // const window = createSVGWindow();
  // const document = window.document;
  // registerWindow(window, document);
  // const canvas = SVG(document.documentElement)//.size(300, 200);
  // const square = canvas.rect(100, 100).fill('yellow');
}

async function userInput() {
  const questions = [
    {
      type: "input",
      name: "brandName",
      message: "enter 3 characters for your brand initials ",
    },
    {
      type: "input",
      name: "textColor",
      message: "enter a color keyword/ #hex code for your text color",
    },
    {
      type: "choice",
      name: "logoShape",
      message: "select a shape for your logo",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "ShapeColor",
      message: "select a color keyword/ #hex code for your shape color",
    },
  ];

  const inquirer = await import("inquirer");
  return await inquirer.default.prompt(questions);
  
  const c = new Circle(
    answers.brandName,
    answers.textColor,
    answers.ShapeColor
  );
  const t = new Triangle(
    answers.brandName,
    answers.textColor,
    answers.ShapeColor
  );
  const s = new Square(
    answers.brandName,
    answers.textColor,
    answers.ShapeColor
  );
  c.getlogotext();
  c.setlogoText(answers.brandName);
  c.getTextcolor(answers.textColor);
  c.setTextcolor(answers.textColor);
  c.getShapecolor(answers.ShapeColor);
  c.setShapecolor(answers.ShapeColor);
  t.getlogotext();
  t.setlogoText(answers.brandName);
  t.getTextcolor(answers.textColor);
  t.setTextcolor(answers.textColor);
  t.getShapecolor(answers.ShapeColor);
  t.setShapecolor(answers.ShapeColor);
  s.getlogotext();
  s.setlogoText(answers.brandName);
  s.getTextcolor(answers.textColor);
  s.setTextcolor(answers.textColor);
  s.getShapecolor(answers.ShapeColor);
  s.setShapecolor(answers.ShapeColor);
  console.log(t.drawShape());
  console.log(s.drawShape());
  console.log(c.drawShape());
}

main();
