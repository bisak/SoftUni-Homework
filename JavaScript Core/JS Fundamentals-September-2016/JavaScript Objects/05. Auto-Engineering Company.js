function exec(input) {
    let cars = new Map();
    for (let line of input) {
        let tokens = line.split(" | ");
        let manufacturer = tokens[0];
        let model = tokens[1];
        let producedCounts = Number(tokens[2]);

        if (!cars.has(manufacturer)) {
            cars.set(manufacturer, new Map())
        }
        if (!cars.get(manufacturer).has(model)) {
            cars.get(manufacturer).set(model, producedCounts)
        } else {
            cars.get(manufacturer).set(model, cars.get(manufacturer).get(model) + producedCounts)
        }
    }

    for(let [k,v] of cars){
        console.log(k);
        for(let [k2,v2]of v){
            console.log("###"+k2+ " -> "+ v2);
        }
    }

}

exec([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])