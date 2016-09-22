function exe([principalSum, interestRate, compPeriod, totalYears]) {
    let freq = 12/compPeriod;
    let f = principalSum*(Math.pow((1 + interestRate/100/freq), freq*totalYears));
    console.log(Math.round(f*100)/100);
}

exe([100000, 5, 12, 25]);