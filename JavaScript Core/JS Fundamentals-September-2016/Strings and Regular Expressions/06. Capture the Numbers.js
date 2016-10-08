function exec(input) {
    let numsArray = [];
    for (let string of input) {
        let number = string.match(/\d+/g);
        if (number != null) number.map(x=>numsArray.push(x));
    }
    console.log(numsArray.join(" "));
}

exec(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);