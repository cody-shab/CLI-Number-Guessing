#! usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNum = Math.floor(Math.random() * 6 * 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNum",
        type: "number",
        message: "Please guess a digit between 1-6 : ",
    },
]);
if (answers.userGuessedNum == randomNum) {
    console.log("You won!");
}
else {
    console.log("You lose!");
}
