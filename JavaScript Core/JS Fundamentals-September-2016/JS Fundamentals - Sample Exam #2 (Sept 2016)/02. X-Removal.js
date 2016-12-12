function matrixSolution(matrixRows) {
    let matrix = matrixRows.map(row => row.split(''));
    let entriesToDelete = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            try {
                if (matrix[row][col].toLowerCase() == matrix[row - 1][col - 1].toLowerCase() &&
                    matrix[row][col].toLowerCase() == matrix[row + 1][col + 1].toLowerCase() &&
                    matrix[row][col].toLowerCase() == matrix[row - 1][col + 1].toLowerCase() &&
                    matrix[row][col].toLowerCase() == matrix[row + 1][col - 1].toLowerCase()) {
                    entriesToDelete.push([row, col]);
                }
            } catch (e) {
            }
        }
    }
    for (let index = 0; index < entriesToDelete.length; index++) {
        let row = entriesToDelete[index][0];
        let col = entriesToDelete[index][1];
        delete matrix[row][col];
        delete matrix[row-1][col-1];
        delete matrix[row+1][col+1];
        delete matrix[row-1][col+1];
        delete matrix[row+1][col-1];
    }
    console.log(matrix.map(row => row.join(' ').trim().replace(/\s+/g,'')).join('\n'));
}

matrixSolution([
    "puoUdai",
    "miU",
    "ausupirina",
    "8n8i8",
    "m8o8a",
    "8l8o860",
    "M8i8",
    "8e8!8?!"
]);