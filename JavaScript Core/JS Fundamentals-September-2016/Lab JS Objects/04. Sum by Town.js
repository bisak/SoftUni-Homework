function exec(input) {
    let totalIncome = {};
    for (let i = 0; i < input.length; i += 2) {
        let key = input[i];
        let value = Number(input[i + 1]);
        if (!totalIncome.hasOwnProperty(key)) {
            totalIncome[key] = 0
        }
        totalIncome[key] += value;
    }
    console.log(JSON.stringify(totalIncome));
}

exec([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
);