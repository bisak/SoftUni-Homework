function exe(input) {
    let initialNumber = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        if (input[i] == 'chop') {
            initialNumber = initialNumber / 2;
        }
        if (input[i] == 'dice') {
            initialNumber = Math.sqrt(initialNumber);
        }
        if (input[i] == 'spice') {
            initialNumber = initialNumber + 1;
        }
        if (input[i] == 'bake') {
            initialNumber = initialNumber * 3;
        }
        if (input[i] == 'fillet') {
            initialNumber = initialNumber - (20 / 100) * initialNumber;
        }
        console.log(initialNumber);
    }
}
