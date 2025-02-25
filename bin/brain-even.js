console.log('Answer "yes" if the number is even, otherwise answer "no".')

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = randomNumber(1, 100);

const even = (number) => {
    return number % 2 === 0;
}

const question = 3;
let correctAnswers = 0;

for (let i = 0; i < numberOfQuestions; i++) {
    const questionNumber = randomNum();
    console.log(`Question: ${questionNumber}`)
    const userAnswer = readline.question('Your answer: ');
    const correctAnswer = even(questionNumber) ? 'yes' : 'no';
}