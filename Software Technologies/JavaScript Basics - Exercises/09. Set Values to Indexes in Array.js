function printLanes(input) {
    "use strict";
    let n = Number(input[0])
    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = 0;
    }
    for (let i = 1; i < input.length; i++) {
        let pair = input[i].split(' - ')
        let index = Number(pair[0])
        let value = Number(pair[1])
        arr[index] = value
    }
    for(let a of arr){
        console.log(a)
    }
}

printLanes([2, '0 - 5', '0 – 6', '0 – 7'])