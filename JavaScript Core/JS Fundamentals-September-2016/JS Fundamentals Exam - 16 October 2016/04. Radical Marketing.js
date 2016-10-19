function solve(input) {
    let people = new Map();
    for (let i = 0; i < input.length; i++) {
        if (input[i].split('-').length == 1) {
            if (!people.has(input[i])) {
                people.set(input[i], new Set())
            }
        }
        if (input[i].split('-').length == 2) {
            let firstPerson = input[i].split('-')[0];
            let secondPerson = input[i].split('-')[1];
            if (people.has(firstPerson) && people.has(secondPerson) && firstPerson != secondPerson) {
                people.get(secondPerson).add(firstPerson);
            }
        }
    }
    let allOfMaxSubscribers;
    let maxSize = Number.NEGATIVE_INFINITY;
    let personWithMax;
    let secPerSubbed = 0;
    let firstPerSubbed = 0;
    for (let [person, subs] of people) {
        if (subs.size >= maxSize) {
            if (subs.size == maxSize) {
                for (let [personOther, subs] of people) {
                        if (subs.has(person)) {
                            secPerSubbed++;
                        }
                        if (subs.has(personWithMax)) {
                            firstPerSubbed++;
                        }
                }
                if (secPerSubbed > firstPerSubbed) {
                    personWithMax = person;
                    allOfMaxSubscribers = subs;
                    maxSize = subs.size
                }

            } else {
                personWithMax = person;
                allOfMaxSubscribers = subs;
                maxSize = subs.size
            }
        }
    }
    console.log(personWithMax);
    let i = 1;
    for (let item of allOfMaxSubscribers.values()) {
        console.log(i + '. ' + item);
        i++;
    }
}

solve([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);