let arr = [1, 2, 5, 735, 4355, 555444, 123, 0, 1, 6969696, 10];
console.time('fff');
for (let i = 0; i < 1000000; i++) {
    arr.sort((x, y)=>x - y);
    ///arr = [1, 2, 5, 735, 4355, 555444, 123, 0, 1, 6969696, 10];
}
console.timeEnd('fff');