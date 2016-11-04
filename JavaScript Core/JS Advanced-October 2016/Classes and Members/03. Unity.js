class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(rat) {
        if (rat instanceof Rat) {
            this.rats.push(rat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `"##"${+rat.name}`;
        }
        return output.trim();
    }
}

let r = new Rat("pesho");
r.unite = new Rat('goshowe');
r.unite = {name: 69};

console.log(r.getRats)

console.log("" + r)