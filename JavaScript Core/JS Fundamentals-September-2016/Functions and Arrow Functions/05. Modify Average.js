function exec([input]) {
    let num = input;
    do {
        let sumOfNumbers = 0;
        let averageSumOfNumbers = 0;
        for (let i = 0; i < num.length; i++) {
            sumOfNumbers += Number(num[i]);
        }
        averageSumOfNumbers = sumOfNumbers / num.length;
        if (averageSumOfNumbers > 5) {
            console.log(num);
            break;
        } else {
            num += 9;
        }

    } while (true);
}

exec(['101']);