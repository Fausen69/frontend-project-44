#!/usr/bin/env node

import readlineSync from 'readline-sync';

import User from '../src/cli.js';

const userName = User();

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gcd = (a, b) => {
    const compute = (x, y) => (y === 0 ? x : compute(y, x % y));
    return compute(a, b);
}

const questions = 3;
let score = 0;

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < questions; i++) {
    const num1 = randomNumber(1, 20);
    const num2 = randomNumber(1, 20);
    const correctAnswer = gcd(num1, num2);

    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

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
