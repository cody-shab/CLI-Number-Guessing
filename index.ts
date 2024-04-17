#! usr/bin/env node

import inquirer from "inquirer";

const randomNum = Math.floor(Math.random() * 6 * 1);
const answers = await inquirer.prompt([ 
   {
   name: "userGuessedNum",
   type: "number",
   message: "Please guess a digit between 1-6 : ",
   },
])

if(answers.userGuessedNum == randomNum){
    console.log("You won!")
}
else{
    console.log("You lose!")
}