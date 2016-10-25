let add = (function () {
    let sum = 0;
    this.toString = function () {
        return sum;
    }
    return function (par) {
        return sum+=par;
    }

})();

console.log(add(1)(6)(-3));