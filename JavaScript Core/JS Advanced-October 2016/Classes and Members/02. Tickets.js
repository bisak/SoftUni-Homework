function exec(inputArr, inputString) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let objArray = [];
    for (let entry of inputArr) {
        let tokens = entry.split("|");
        objArray.push(new Ticket(tokens[0], Number(tokens[1]), tokens[2]));
    }
    let outArr = [];
    if (inputString == "price") {
        outArr = objArray.sort((a, b)=>a[inputString] - b[inputString]);
    } else {
        outArr = objArray.sort((a, b)=>a[inputString].localeCompare(b[inputString]));
    }
    return outArr;
}

console.log(exec(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'))