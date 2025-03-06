#!/usr/bin/env node

import readlineSync from 'readline-sync';

import User from '../src/cli.js';

const userName = User();

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[randomNumber(0, operations.length - 1)];
}

const calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
    }
};

const questions = 3;
let score = 0;

console.log('What is the result of the expression?');

for (let i = 0; i < questions; i++) {
    const num1 = randomNumber(1, 20);
    const num2 = randomNumber(1, 20);
    const operation = randomOperation();
    const correctAnswer = calculate(num1, num2, operation);

    const userAnswer = readlineSync.question(`Question: ${num1} ${operation} ${num2}\nYour answer: `);

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        console.log('Correct!');
        score++;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
}

if (score === questions) {
    console.log(`Congratulations, ${userName}!`);
}
