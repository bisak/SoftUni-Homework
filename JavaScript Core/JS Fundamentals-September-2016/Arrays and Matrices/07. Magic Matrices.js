function exec(matrixRows) {
    let isMagic = false;
    let compareArray = [];
    let sumHor = 0;
    let sumVert = 0;
    let maxSumHor = Number.MIN_SAFE_INTEGER;
    let minSumHor = Number.MAX_SAFE_INTEGER;
    let maxSumVert = Number.MIN_SAFE_INTEGER;
    let minSumVert = Number.MAX_SAFE_INTEGER;
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    for (let i = 0; i < matrix.length; i++) {
        sumVert = 0;
        sumHor = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumVert += matrix[i][j];
            sumHor += matrix[j][i];
        }
        compareArray.push(sumHor);
        compareArray.push(sumVert);
    }
    console.log(checkEqual(compareArray))

    function checkEqual(array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] !== array[0]){
                return false;
                break;
            }
        }
        return true;
    }
}

exec(['4 5 6',
    '6 5 4',
    '5 5 5']);