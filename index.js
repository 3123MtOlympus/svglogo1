const inquirer = require("inquirer")
const fs = require("fs")
const {circle, square, triangle}  = require ("./lib/shapes")
inquirer.prompt ([
    {
type:"input",
message:"Enter three characters",
name:"text",
},
{
    type:"input",
    message:"What is your shape color?",
    name:"color",
    },
    {
        type:"list",
        message:"What is the shape?",
        name:"shape",
        choices:["circle", "triangle", "square"]
        },
        {
            type:"input",
            message:"What is the text color?",
            name:"textcolor",
            },
])
.then (answers=> {
    if (answers.shape=== "circle"){
        let shape = new circle (answers.shape, answers.color, answers.text, answers.textcolor)
        fs.writeFileSync ("./Output/shapes.svg",shape.render())
    }
    if (answers.shape=== "square"){
        let shape = new square (answers.shape, answers.color, answers.text, answers.textcolor)
        fs.writeFileSync ("./Output/shapes.svg",shape.render())
    }
    if (answers.shape=== "triangle"){
        let shape = new triangle (answers.shape, answers.color, answers.text, answers.textcolor)
        fs.writeFileSync ("./Output/shapes.svg",shape.render())
    }
})