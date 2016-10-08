function exec(arr) {
    let result = arr.sort((a, b) => a - b);
    return result.slice(0, 2);
}