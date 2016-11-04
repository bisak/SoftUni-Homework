let fn = (function () {
    let uniqueId = 0;
    class Extensible {
        constructor() {
            this.id = uniqueId++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] == "function") {
                    Extensible.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        };
    }
})();


let obj1 = new Extensible();

console.log(obj1.id)