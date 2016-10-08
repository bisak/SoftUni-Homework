function exec(sales) {
    let townsWithProducts = new Map();
    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }
    for (let x of Array.from(townsWithProducts)) {
        for (let i = 0; i < x.length; i++) {
            if (i % 2 != 0) {
                for(let row of Array.from(x[i])){
                    console.log("$$$" + row[0] + " : " + row[1])
                }
            }else{
                console.log(`Town - ` +  x[i])
            }
        }
    }
}


exec([
        'Sofia -> Laptops HP -> 200 : 2000',
        'Sofia -> Raspberry -> 200000 : 1500',
        'Sofia -> Audi Q7 -> 200 : 100000',
        'Montana -> Portokals -> 200000 : 1',
        'Montana -> Qgodas -> 20000 : 0.2',
        'Montana -> Chereshas -> 1000 : 0.3'
    ]
)