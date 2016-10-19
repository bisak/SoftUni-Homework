function first(input) {
    let max = Number.NEGATIVE_INFINITY;
    input = input.map(Number);
    for (let i = 0; i < input.length; i++) {
        let currentSum = 1;
        if (input[i] >= 0 && input[i] < 10) {
            for (let j = 1; j <= input[i]; j++) {
                currentSum = currentSum * input[i + j]
            }
            if (max < currentSum) {
                max = currentSum;
            }
        }
    }
    console.log(max);
}

first([
    '10',
    '20',
    '2',
    '30',
    '44',
    '123',
    '3',
    '56',
    '20',
    '24']);