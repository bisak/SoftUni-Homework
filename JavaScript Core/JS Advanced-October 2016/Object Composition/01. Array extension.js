(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let arr = this;
        let newArr = [];
        for(let i = n ; i < arr.length; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    };
    Array.prototype.take = function (n) {
        let arr = this;
        let newArr = [];
        for(let i = 0 ; i < n; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    };
    Array.prototype.sum = function () {
        let arr = this;
        let sum = 0;
        sum = arr.reduce((x,y) => x+y);
        /*for(let i = 0 ; i < arr.length; i++){
            sum+=Number(arr[i]);
        }*/
        return sum;
    };
    Array.prototype.average = function () {
        let arr = this;
        let sum = 0;
        sum = arr.reduce((x,y) => x+y);
        /*for(let i = 0 ; i < arr.length; i++){
         sum+=Number(arr[i]);
         }*/
        return sum/arr.length;
    };
})();
console.log([9,10].average());