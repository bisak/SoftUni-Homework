function round([number, precision]) {
    [number, precision].map(Number);
    let divider = Math.pow(10, precision);
    return Math.round(number * divider) / divider
}

