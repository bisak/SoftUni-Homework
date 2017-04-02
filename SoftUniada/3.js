function runMofo([input]) {
    input = input.split("");
    let ops = 0;
    for (let i = 0; i < input.length - 1;) {
        if (input[i] === input[i + 1]) {
            let pederas = input.join("");
            pederas = cut(pederas, i, i + 1);
            input = pederas.split("");
            ops++;
            i = 0;
            continue;
        }
        i++;
    }
    if (input.length == 0) {
        console.log("Empty String");
    } else {
        console.log(input.join(""));
    }
    console.log(ops + " operations");

    function cut(str, cutStart, cutEnd) {
        return str.substr(0, cutStart) + str.substr(cutEnd + 1);
    }
}

runMofo(['abaabccc']);
console.log();

runMofo(['baabccdd']);
