function exec(input) {
    let catalogue = new Map();

    for (let line of input) {
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = Number(tokens[1]);
        let productFirstLetter = product[0].toUpperCase();
        if(!catalogue.has(productFirstLetter)){
            catalogue.set(productFirstLetter, [])
        }

        catalogue.get(productFirstLetter).push(line);
    }

    function customComparator(productA, productB) {
        return productA.toLowerCase().localeCompare(productB.toLowerCase());
    }

    let sortedCategories = [...catalogue.keys()].sort();
    for (let category of sortedCategories) {
        console.log(category);
        let products = catalogue.get(category).sort(customComparator);
        products.forEach(p => console.log("  "+ p.split(" : ").join(": ")));
    }
}

exec([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);