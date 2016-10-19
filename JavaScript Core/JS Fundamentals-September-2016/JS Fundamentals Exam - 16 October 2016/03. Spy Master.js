function spy(input) {
    let key = input.shift().toLowerCase();
    let regex = /(^|\s)specialkey\s+[A-Z!%$#]{8,}/g;
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].replace(/specialkey/gi, 'specialkey');
        console.log(input[i].match(regex))
        if (true) {
            console.log(input[i]);
        }
    }
}

spy([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);