function solution([input]) {
    let str = input;

    if(!input) return
    let firstRegex = /\s*([.,!?:;])\s*/g;
    let dotRegex = /\s*\.\s*\.\s*\.\s*!/g;
    let datesRegex = /(\d+)\s*\.\s*/g;
    let quotesRegex = /"(.*)"/g


    str = str.replace(firstRegex, function (a, b, c) {
        return (b + " ");
    })

    str = str.replace(dotRegex, function (a, b, c) {
        return ("...!");
    })

    str = str.replace(datesRegex, function (a, b, c, d, e) {
        return (b + ".");
    })

    str = str.replace(quotesRegex, function (a, b, c, d, e) {
        let toReturn = b.trim();
        return '"'+toReturn+'"'
    })
    console.log(str.trim())
}



solution(['Terribly formatted text . With chaotic spacings."    .,asdTerrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .'])