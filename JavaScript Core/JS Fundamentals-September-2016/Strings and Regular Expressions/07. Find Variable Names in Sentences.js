function extractVariableNames([text]) {
    let regEx= /\b_([A-Za-z0-9]+)\b/g;
    let vars = [], match;
    vars = text.match(regEx);
    vars = vars.map(x=> x.replace(/^_/, ""));
    return vars.join(',');
}

console.log(extractVariableNames(['Calculate the _area of the _perfectRectangle object.']));