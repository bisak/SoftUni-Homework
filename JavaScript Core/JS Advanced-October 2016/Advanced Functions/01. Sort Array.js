function solve(input, method) {
    let methods = {
        asc: (a, b)=>a - b,
        desc: (a, b)=>b - a
    };
    return input.sort(methods[method]);
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));