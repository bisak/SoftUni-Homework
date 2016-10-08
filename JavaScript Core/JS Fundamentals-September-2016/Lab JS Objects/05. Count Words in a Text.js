function exec([input]) {
    let wordsArray = input.match(/[A-Za-z0-9_]*/g).filter((x)=>x != '');
    let wordsCount = {};
    for (let word of wordsArray) {
        if (!wordsCount.hasOwnProperty(word)) {
            wordsCount[word] =1 ;
        }else{
            wordsCount[word]++;
        }
    }
    console.log(JSON.stringify(wordsCount));
}

exec([`JS devs use Node.js for server-side JS.-- JS for devs`])