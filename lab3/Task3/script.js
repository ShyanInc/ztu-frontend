function findLongestStreakRowIndex(matrix) {
    let longestStreak = 0;
    let longestStreakRowIndex = -1;

    for (let i = 0; i < matrix.length; i++) {
        let currentStreak = 1;
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i][j - 1]) {
                currentStreak++;
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                    longestStreakRowIndex = i;
                }
            }
            else {
                currentStreak = 1;
            }
        }
    }

    return longestStreakRowIndex;
}


const max = 10;
const min = -10;

const matrix = [];
for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        const randomValue = Math.round(Math.random() * (max - min + 1)) + min;
        row.push(randomValue);
    }
    matrix.push(row);
}
console.log('matrix: ', matrix);

let positiveNumbersCount = 0;
let rowsWithoutZeroCount = 0;
let columnsWithZeroCount = 0;
const longestStreakRowIndex = findLongestStreakRowIndex(matrix);

for (let el of matrix) {
    for (let i = 0; i < el.length; i++) {
        if (el[i] > 1) positiveNumbersCount++;
    }
}

for (let el of matrix) {
    let isZeroInRow = false;
    for (let j = 0; j < el.length; j++) {
        if (el[j] === 0) {
            isZeroInRow = true;
            break;
        }
    }
    if (!isZeroInRow) rowsWithoutZeroCount++;
}

for (let j = 0; j < matrix[0].length; j++) {
    let isZeroInColumn = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] === 0) {
            isZeroInColumn = true;
            break;
        }
    }
    if (isZeroInColumn) columnsWithZeroCount++;
}


console.log('positive numbers count:', positiveNumbersCount);
console.log('rows without zero count:', rowsWithoutZeroCount);
console.log('columns with zero count:', columnsWithZeroCount);
console.log('longest streak row index:', longestStreakRowIndex);

for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] < 0) continue;

    let result = matrix[i][0];
    let isNegative = false
    for (let j = 1; j < matrix[j].length; j++) {
        if (matrix[i][j] < 0) {
            isNegative = true;
            break;
        }
        result *= matrix[i][j];
    }

    if (!isNegative) {
        console.log(`Row #${i} product:`, result);
    }
}

for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] < 0) continue;

    let result = matrix[0][j];
    let isNegative = false;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][j] < 0) {
            isNegative = true;
            break;
        };
        result += matrix[i][j];
    }

    if (!isNegative) {
        console.log(`Positive column #${j} sum:`, result);
    }
}

for (let j = 0; j < matrix[0].length; j++) {
    let result = matrix[0][j];
    let isNegative = false;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][j] < 0) {
            isNegative = true;
        };
        result += matrix[i][j];
    }

    if (isNegative) {
        console.log(`One negative column #${j} sum:`, result);
    }
}

const transpose = [];
for (let i = 0; i < matrix[0].length; i++) {
    transpose[i] = [];
    for (let j = 0; j < matrix.length; j++) {
        transpose[i][j] = matrix[j][i];
    }
}

console.log('transpose matrix:', transpose)