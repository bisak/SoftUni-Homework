function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
            break;
        }
    }
    return value > 1;
}