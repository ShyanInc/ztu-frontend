const matrix = [
    [1, 2, -3, 4],
    [5, 6, 7, 8],
    [-9, 10, -11, 12],
    [-13, 14, 15, -16]
];


// Task 1
function findMaxDiagonalSum(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxSum = -Infinity;

    function calculateDiagonalSum(startRow, startCol) {
        let sum = 0;
        while (startRow < numRows && startCol < numCols) {
            sum += matrix[startRow][startCol];
            startRow++;
            startCol++;
        }
        return sum;
    }

    for (let row = 0; row < numRows; row++) {
        const sum1 = calculateDiagonalSum(row, 0);
        maxSum = Math.max(maxSum, sum1);
    }

    for (let col = 1; col < numCols; col++) {
        const sum2 = calculateDiagonalSum(0, col);
        maxSum = Math.max(maxSum, sum2);
    }

    return maxSum;
}

const maxDiagonalSum = findMaxDiagonalSum(matrix);
console.log("Максимальна сума на паралельних діагоналях: " + maxDiagonalSum);


// Task 2
function findMinDiagonalSum(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let minSum = Infinity;

    function calculateDiagonalSum(startRow, startCol) {
        let sum = 0;
        while (startRow < numRows && startCol >= 0) {
            sum += Math.abs(matrix[startRow][startCol]);
            startRow++;
            startCol--;
        }
        return sum;
    }

    for (let row = 0; row < numRows; row++) {
        const sum1 = calculateDiagonalSum(row, numCols - 1);
        minSum = Math.min(minSum, sum1);
    }

    for (let col = numCols - 2; col >= 0; col--) {
        const sum2 = calculateDiagonalSum(0, col);
        minSum = Math.min(minSum, sum2);
    }

    return minSum;
}

const minDiagonalSum = findMinDiagonalSum(matrix);
console.log("Мінімум серед сум модулів на паралельних побічній діагоналі: " + minDiagonalSum);