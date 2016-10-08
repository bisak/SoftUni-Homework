function firstLastKElements(arr) {
    let result = [];
    for (let x in arr) {
        if (x % 2 != 0) {
            result.push(arr[x]*2);
        }
    }
    result.reverse();
    console.log(result)

}
