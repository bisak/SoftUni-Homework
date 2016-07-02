function multipleKeyValue(input) {
    let arr = [];
    let someKey = input[input.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
        let pair = input[i].split(' ');
        let key = pair[0];
        let value = pair[1];
        arr[key] = value;
        if (someKey == key) {
            console.log(arr[key]);
        }
    }
    if (!(someKey in arr)) {
        console.log("None");
    }
}
multipleKeyValue(['key value', 'key eulav', 'test test', '3 test', '3 test1', 'key'])