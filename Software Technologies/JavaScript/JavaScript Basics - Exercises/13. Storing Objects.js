function func(input) {
    "use strict";
    let obj = {}
    for (let entry of input) {
        let splitted = entry.split(" -> ");
        let name = splitted[0];
        let age = splitted[1];
        let grade = splitted[2];
        obj[name] = name;
        obj[age] = age;
        obj[grade] = grade;
        console.log("Name: " + obj[name])
        console.log("Age: " + obj[age])
        console.log("Grade: " + obj[grade])
    }
}

func(
    [
        'Pesho -> 13 -> 6.00',
        'Ivan -> 12 -> 5.57',
        'Toni -> 13 -> 4.90'
    ]
)