const paragraphs = document.querySelectorAll('#paragraphs p');

console.log(paragraphs);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let max = arr[0];
let min = arr[0];

let evenNumbersCount = 0;
let oddNumbersCount = 0;

let numbersWithTwoDigits = 0;

let positiveNumbersCount = 0;
let negativeNumbersCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];

    arr[i] % 2 === 0 ? evenNumbersCount++ : oddNumbersCount++;

    if (Math.abs(arr[i]).toString().length === 2) numbersWithTwoDigits++;

    arr[i] > 0 ? positiveNumbersCount++ : negativeNumbersCount++;
}

console.log('max number:', max);
console.log('min number:', min);

console.log('even numbers count:', evenNumbersCount);
console.log('odd numbers count:', oddNumbersCount);

console.log('numbers with two digits count:', numbersWithTwoDigits);

console.log('positive numbers count:', positiveNumbersCount)
console.log('negative numbers count:', negativeNumbersCount)

function comparator(a, b) {
    return a - b;
}

console.log('array of numbers sorted in ascending mode:', arr.sort(comparator));

let reversedArray = arr.reverse();
console.log('reversed array:', reversedArray)