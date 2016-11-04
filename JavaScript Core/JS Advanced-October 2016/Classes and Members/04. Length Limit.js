class Stringer {
    constructor(str, length) {
        this.str = str;
        this.length = length;
    }

    get innerString() {
        return this.str.toString();
    }

    get innerLength() {
        return this.length;
    }

    increase(len) {
        this.length += len;
    }

    decrease(len) {
        this.length -= len;
        if (this.length < 3) {
            this.length = 0;
        }
    }

    toString() {
        if (this.length >= this.str.length) {
            return this.str;
        }
        return this.str.substring(0, this.length) + "...";
    }
}

let str = new Stringer('pesho', 2);

console.log(str.toString())