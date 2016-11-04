let myList = (function sorted() {
    let array = [];

    function getSize() {
        return array.length;
    }
    let a = {
        add: function(element) {
            array.push(element);
            array = array.sort((a, b) => a - b);
            return array;
        },
        remove: function(index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                array = array.sort((a, b) => a - b);
                return array;
            } else {
                throw new Error();
            }
        },
        get: function(index) {
            if (index >= 0 && index < array.length) {
                return array[index];
            } else {
                throw new Error();
            }
        },
    };
    a.__defineGetter__("size", getSize);
    return a;
})();

myList.add(5);
console.log(myList.size);
