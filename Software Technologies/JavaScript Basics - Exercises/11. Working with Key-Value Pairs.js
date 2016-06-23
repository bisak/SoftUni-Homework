function keyvalpair(input) {
    "use strict";

    let obj = {}

    for (let i = 0; i < input.length - 1; i++) {
        let splitted = input[i].split(' ')
        let key = splitted[0];
        let value = splitted[1];
        obj[key] = value
    }

    if (obj[input[input.length - 1]] == undefined) console.log("None");
    else console.log(obj[input[input.length - 1]]);
}

keyvalpair(
    [
        'key value',
        'key eulav',
        'test tset',
        'ey'
    ]
)