function exe([a,b,c]) {
    let p = (Number(a) + Number(b) + Number(c)) / 2;
    return Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
}