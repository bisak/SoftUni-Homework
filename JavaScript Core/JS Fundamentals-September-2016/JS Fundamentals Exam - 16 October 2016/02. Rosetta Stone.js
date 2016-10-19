function solution(input) {
    let letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultToPrint = '';
    //formula to get the letter
    //letters[86 % 27]
    let firstMatrixSize = input.shift();
    let firstMatrixArray = input.slice(0, firstMatrixSize);
    let firstMatrix = firstMatrixArray.map(row => row.split(' ').map(Number));
    let matrix = input.slice(firstMatrixSize).map(row => row.split(' ').map(Number));

    let resultMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        resultMatrix[i] = [];
    }


    for (let row = 0; row < matrix.length; row += firstMatrix.length) {
        for (let col = 0; col < matrix[row].length; col += firstMatrix[0].length) {
            for (let secRow = 0; secRow < firstMatrix.length; secRow++) {
                for (let secCol = 0; secCol < firstMatrix[0].length; secCol++) {
                    try {
                        resultMatrix[row + secRow][col + secCol] = letters[(Number(matrix[row + secRow][col + secCol]) + Number(firstMatrix[secRow][secCol])) % 27];
                    } catch (e) {
                    }
                }
            }
        }
    }
    for (let i = 0; i < resultMatrix.length; i++) {
        for (let j = 0; j < resultMatrix[i].length; j++) {
            if (resultMatrix[i][j] != undefined)
                resultToPrint += resultMatrix[i][j];
        }
    }
    console.log(resultToPrint)
}

solution(["1", "1 3 13", "12 22 14 13 25 0 4 24 23", "18 24 2 25 22 0 0 11 18", "8 25 6 26 8 23 13 4 14", "14 3 14 10 6 1 6 16 14", "11 12 2 10 24 2 13 24 0", "24 24 10 14 15 25 18 24 12", "4 24 0 8 4 22 19 22 14", "0 11 18 26 1 19 18 13 15", "8 15 14 26 24 14 26 24 14"]);