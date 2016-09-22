function run([initialAge, firstName, firstAge, secondName, secondAge]) {
    let personOne = new Object();
    let personTwo = new Object();
    personOne.name = firstName;
    personTwo.name = secondName;
    personOne.age = Number(firstAge);
    personTwo.age = Number(secondAge);

    if (personOne.age >= initialAge) console.log(personOne);
    if (personTwo.age >= initialAge) console.log(personTwo);
}

run(['12', 'Ivan', '15', 'Asen', '9']);