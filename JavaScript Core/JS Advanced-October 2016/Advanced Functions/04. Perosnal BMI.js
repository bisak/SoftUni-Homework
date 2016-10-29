function runit(name, age, weight, height) {
    let bmi = Math.round(weight / ((height / 100) * (height / 100)));
    let status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    }
    if (bmi < 25 && bmi >= 18.5) {
        status = 'normal';
    }
    if (bmi < 30 && bmi >= 25) {
        status = "overweight";
    }
    if (bmi >= 30) {
        status = 'obese';
    }
    let objToReturn = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    };
    if (status == 'obese') {
        objToReturn.recommendation = "admission required";
    }
    return objToReturn;
}

runit("Honey Boo Boo", 9, 57, 137);
