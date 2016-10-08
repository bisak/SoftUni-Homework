function exec(input) {
    let result = [];
    let currentMax = Number.MIN_SAFE_INTEGER;
    for (let i=0; i < input.length; i++) {
        if (Number(input[i] >= currentMax)) {
            result.push(Number(input[i]));
            currentMax = Number(input[i]);
        }
    }
    console.log(result.join('\n'))
}
exec(['1', '3', '8', '4', '10', '12', '3', '2', '24']);