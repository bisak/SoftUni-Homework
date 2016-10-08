function secretData(input) {
    let regName = /\*[A-Z][a-zA-Z]*(?= |\t|$)/g;
    let regPhone = /\+[0-9\-]{10}(?= |\t|$)/g;
    let regId = /\![0-9a-zA-Z]+(?= |\t|$)/g;
    let regBase = /\_[0-9a-zA-Z]+(?= |\t|$)/g;

    for (let word of input) {
        word = word.replace(regName, m => '|'.repeat((m.length)));
        word = word.replace(regPhone, m => '|'.repeat((m.length)));
        word = word.replace(regId, m => '|'.repeat((m.length)));
        word = word.replace(regBase, m => '|'.repeat((m.length)));

        console.log(word);
    }
}