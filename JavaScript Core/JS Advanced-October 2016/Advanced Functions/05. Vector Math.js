(function () {
    let obj = {
        add: function (a, b) {
            [a, b] = [a, b].map(Number);
            let c = [];
            c[0] = a[0] + a[1];
            c[1] = b[0] + b[1];
            return c;
        },
        multiply: function (a, b) {
            [a, b] = [a, b].map(Number);
            let returnArray = [];
            for (let entry of a) {
                returnArray.push(entry * b);
            }
            return returnArray;
        },
        length: function (a) {
            a = Number(a);
            return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        },
        dot: function (a, b) {
            [a, b] = [a, b].map(Number);
            return a[0] * a[1] + b[0] * b[1];
        },
        cross: function (a, b) {
            [a, b] = [a, b].map(Number);
            return a[0] * b[1] - a[1] * b[0];
        }
    };
    return obj;
})();