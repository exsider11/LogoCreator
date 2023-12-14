const inquirer = require('inquirer');
const Logo = require('./lib/shapes');
const fs = require('fs');

inquirer.prompt([
    {
        name: 'text',
        message: 'What is the text for the logo?',
        type: 'input'
    },
    {
        name: 'textColor',
        message: 'What color is the text?(hexadecimal only)',
        type: 'list',
        choices:['red','yellow','orange','green','blue','purple','brown','black','white']
    },
    {
        name: 'shape',
        message: 'what is the shape of the logo?',
        type: 'list',
        choices:['square','circle','triagle']
    },
    {
        name:'shapeColor',
        message: 'What color is the shape?(hexadecimal only)',
        type: 'input'
    }
])

.then(function(answer){
    const logo = new Logo(
        answer.text,
        answer.textColor,
        answer.shape,
        answer.shapeColor
    );
    var svgShape = logo.svgShape(answer.shape);
    var svgParameters = logo.svgParameters(answer.shape);
    fs.writeFile('logo.svg',
    `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <style>
    ${svgShape} {
      fill: ${logo.textColor};
    }
    </style>
    <${svgShape} points="${svgParameters}" />
    <text x="5" y="30" textLength="89" lengthAdjust="spacing" style="fill: ${answer.shapeColor}">${answer.text}</text>
    </svg>`,
    (err) => err ? console.error(err) : console.log('shape created.'))
;


})