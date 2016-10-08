function exec([str]) {
    let results = str.match(/(\w+)/g);
    console.log(results.join("|"));
}

exec(['Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !']);