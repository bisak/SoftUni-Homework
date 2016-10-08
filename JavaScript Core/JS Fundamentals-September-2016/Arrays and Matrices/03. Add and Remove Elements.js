function exec(input) {
    let initial = 0;
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "add") {
            initial++;
            output.push(initial);
        } else if (input[i] == "remove") {
            output.pop();
            initial++;
        }
    }
    if (output.length == 0) console.log("Empty")
    else console.log(output.join('\n'));
}

exec(['remove', 'remove', 'remove', 'remove', 'remove']);