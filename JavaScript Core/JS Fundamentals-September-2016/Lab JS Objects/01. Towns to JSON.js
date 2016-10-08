function exec(input) {
    let townsArray = [];
    for (let i = 1; i < input.length; i++) {
        let elements = input[i].split(/\s*\|\s*/g).filter((x)=>x != '');
        let townsData = {};
        townsData["Town"] = elements[0];
        townsData["Latitude"] = Number(elements[1]);
        townsData['Longitude'] = Number(elements[2]);
        townsArray.push(townsData);
    }
    console.log(JSON.stringify(townsArray));
}

exec(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);