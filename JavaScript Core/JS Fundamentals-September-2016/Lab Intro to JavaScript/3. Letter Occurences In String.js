function letterOccurrences([word, letter]) {
    let counter = 0;
    for (let x of word) {
        if (x == letter) {
            counter++;
        }
    }
    console.log(counter);
}

letterOccurrences(["hello", "l"]);