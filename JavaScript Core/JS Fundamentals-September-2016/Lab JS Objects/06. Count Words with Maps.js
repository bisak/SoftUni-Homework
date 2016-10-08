function exec([input]) {
    let wordsArray = input.toLowerCase().match(/[A-Za-z0-9_]*/g).filter((x)=>x != '');
    let wordsCount = new Map();
    for (let word of wordsArray) {
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 1);
        } else {
            wordsCount.set(word, wordsCount.get(word) + 1);
        }
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}


exec([`JS devs use Node.js for server-side JS.-- JS for devs`])