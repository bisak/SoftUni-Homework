function carFactory(input) {
    let output = {};
    let engine = {};
    let carriage = {};
    let wheelSize = 0;
    if(input.wheelsize%2==0){
        wheelSize = input.wheelsize-1;
    }else{
        wheelSize = input.wheelsize;
    }
    if(input.power<=90){
        engine.power = 90;
        engine.volume = 1800;
    }else if(input.power<=120){
        engine.power = 120;
        engine.volume = 2400;
    }else if(input.power<=200){
        engine.power = 200;
        engine.volume = 3500;
    }
    carriage.type = input.carriage;
    carriage.color = input.color;
    output.model = input.model;
    output.engine = engine;
    output.carriage = carriage;
    output.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    return output;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));