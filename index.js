const fs = require("fs");
const { Circle } = require("./lib");

function main() {
  userInput().then((answers) => {
    console.log(answers);
  });
}

function writeSvgFile() {
  // const { createSVGWindow } = await import("svgdom");
  // const window = createSVGWindow();
  // const document = window.document;
  // registerWindow(window, document);
  // const canvas = SVG(document.documentElement)//.size(300, 200);
  // const square = canvas.rect(100, 100).fill('yellow');
  fs.writeFileSync("examples/logo.svg", {});
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
}

main();
