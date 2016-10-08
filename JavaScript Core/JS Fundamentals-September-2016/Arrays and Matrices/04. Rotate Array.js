function exec(input) {
    let rotations = Number(input[input.length - 1]);
    input.pop();
    let lastElements = input.splice(input.length-rotations);
    input.unshift(lastElements.join(' '));
    console.log(input.join(" "));
}

exec(['1', '2', '3', '4', '2']);