function exec(input) {
    let text = input[0];
    let toCensor = [];
    let replaced = text;
    for (let i = 1; i < input.length; i++) {
        while(replaced.indexOf(input[i])!=-1)
        replaced = replaced.replace(input[i], '-'.repeat(input[i].length));
    }
    console.log(replaced);
}
