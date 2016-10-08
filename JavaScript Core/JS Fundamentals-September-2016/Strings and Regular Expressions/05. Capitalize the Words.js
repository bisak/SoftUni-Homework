function exec([string]) {
    string = string.toLowerCase();
    let wordsArray = [];
    let words = string.split(' ');
    for (word of words) {
        let newWord = '';
        newWord = newWord.concat(word[0].toUpperCase());
        for (let i = 1; i < word.length; i++) {
            newWord = newWord.concat(word[i]);
        }
        wordsArray.push(newWord);
    }
    console.log(wordsArray.join(" "));
}

exec(['Was that Easy? tRY thIs onE for SiZe!']);