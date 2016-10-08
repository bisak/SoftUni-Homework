function exec(array) {
    let output = [];
    for (let x in array) {
        if (x % 2 == 0) output.push(array[x]);
    }
    console.log(output.join(" "));
}