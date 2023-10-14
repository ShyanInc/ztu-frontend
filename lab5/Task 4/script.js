const taskField = document.querySelector('.task');
const overallResult = document.querySelector('.result');
const resultInfoField = document.querySelector('.result_info');
const nextBtn = document.querySelector('.next');
const checkBtn = document.querySelector('.check');
const answerInput = document.querySelector('.answer');

let correctCounter = 0;
let taskCounter = 0;
let finalResult;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
    taskCounter += 1;
    checkBtn.disabled = false;

    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    finalResult = firstNumber * secondNumber;

    taskField.innerHTML = firstNumber + ' x ' + secondNumber + ' = ';
}

checkBtn.addEventListener('click', (e) => {
    console.log(taskCounter);
    e.preventDefault();

    if (finalResult === Number.parseInt(answerInput.value)) {
        resultInfoField.innerHTML = 'Вiрно!';
        correctCounter += 1;
    } else {
        resultInfoField.innerHTML = `Помилка, правильна вiдповiдь «${finalResult}»`;
    }

    const correctPercentage = Math.floor(correctCounter / taskCounter * 100);
    overallResult.innerHTML = `Загальний рахунок ${correctPercentage}% (${correctCounter} правильних вiдповiдей з ${taskCounter})`;

    checkBtn.disabled = true;
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateTask();
});

if (taskCounter === 0) {
    generateTask();
}