function alcohol(object) {
    if (object.handsShaking) {
        object.bloodAlcoholLevel += 0.1 * object.weight * object.experience;
        object.handsShaking = false;
    }
    return object;
}
console.log(alcohol({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));