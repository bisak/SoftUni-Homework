function exec(matrixRows) {
    let outputMatrix = [];
    let mainArray = [];
    let secondaryArray = [];
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
        mainArray.push(matrix[row][row]);
        secondaryArray.push(matrix[row][matrix.length - row - 1]);
        outputMatrix[row] = [];
    }
    if (mainSum == secondarySum) {
        for (let i = 0; i < outputMatrix.length; i++) {
            for (let j = 0; j < outputMatrix.length; j++) {
                outputMatrix[i][j] = mainSum;
            }
        }
        for (let row = 0; row < outputMatrix.length; row++) {
            outputMatrix[row][row] = mainArray[row];
            outputMatrix[row][matrix.length - row - 1] = secondaryArray[row];
        }
        console.log(outputMatrix.map(row => row.join(' ')).join('\n'));
    }else{
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

exec(['1 1 1',
    '1 1 1',
    '1 1 0']
);