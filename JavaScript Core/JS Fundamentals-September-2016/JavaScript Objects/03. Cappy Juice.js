function exec(input) {
    let juices = new Map;
    let bottles = new Map;
    for (let row of input) {
        let tokens = row.split(/\s*=>\s*/);
        [juiceName, juiceQuantity] = [tokens[0], Number(tokens[1])];
        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }
        let currentQuantity = juices.get(juiceName)
        currentQuantity += juiceQuantity;

        if (currentQuantity >= 1000) {
            let juiceLeft = currentQuantity % 1000;
            let bottlesToStore = (currentQuantity - juiceLeft) / 1000;
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, bottlesToStore);
            } else {
                bottles.set(juiceName, bottles.get(juiceName) + bottlesToStore);
            }
            juiceQuantity = juiceLeft;
        }
        juices.set(juiceName, juices.get(juiceName) + juiceQuantity);
    }
    for (let [juice, b] of bottles) {
        console.log(`${juice} => ${b}`);
    }
}

exec([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])