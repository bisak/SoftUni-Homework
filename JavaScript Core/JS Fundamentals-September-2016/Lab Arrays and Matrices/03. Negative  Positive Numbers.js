function exec(array) {
    let output = [];
    for (let x of array) {
        if (x < 0) {
            output.unshift(x);
        } else {
            output.push(x);
        }
    }
    for (let x of output) {
        console.log(x);
    }

}