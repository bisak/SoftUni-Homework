let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr2 = [1, 4, 20, 30, 40,5];

function arrayMatchesCount(arr1, arr2) {
    let count = 0;
    let lastIndex = 0;
    let minVal = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < minVal; i++) {
        if (arr1.indexOf(arr2[i], lastIndex) != -1) {
            count++;
            lastIndex = i;
        }
    }
    return count;
}

console.time("fff");
//for (let a = 0; a < 1000000; a++) {
    arrayMatchesCount(arr1, arr2);
//}
console.timeEnd("fff")

let a = arrayMatchesCount(arr1, arr2);
console.log(a);
