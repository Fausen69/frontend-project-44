#!/usr/bin/env node

import readlineSync from 'readline-sync';

import User from '../src/cli.js';

const userName = User();

const randomNumber = (min, max) => {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (number) => {
return number % 2 === 0;
}

const questions = 3;
let score = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < questions; i++) {
const questionNumber = randomNumber(1, 100);
console.log(`Question: ${questionNumber}`);
const userAnswer = readlineSync.question('Your answer: ');
const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

if (userAnswer.toLowerCase() === correctAnswer) {
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