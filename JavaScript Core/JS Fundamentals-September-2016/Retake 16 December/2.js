function solution(input) {
    let array = input.map(Number);
    let outArray = [];
    let shouldBeHigh = array.length * 30;
    let isHigh = 0;
    //console.log(shouldBeHigh)
    while (true) {
        let usedConcrete = 0;
        isHigh = 0;
        for (let i = 0; i < array.length; i++) {
            isHigh += array[i];
            if (array[i] < 30) {
                array[i] = array[i] + 1;
                usedConcrete += 195;
            }
        }
        if (isHigh >= shouldBeHigh) {
            break;
        }
        outArray.push(usedConcrete)
    }

    let sum = 0;
    for (let element of outArray) {
        sum += element * 1900;
    }

    console.log(outArray.join(", "))
    console.log(sum + " pesos")
}

solution(["17"])
solution(["17", "22", "17", "19", "17"])