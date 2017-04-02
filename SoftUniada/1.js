function runMofo([input]) {
    let tokens = input.split(" ");
    tokens = tokens.map(Number);
    let a = tokens[0];
    let b = tokens[1];
    let c = tokens[2];

    let aa = Math.abs(a);
    let bb = Math.abs(b);
    let cc = Math.abs(c);

    if ((aa + bb + cc === 13) ||
        (-aa + bb + cc === 13) ||
        (aa + -bb + cc === 13) ||
        (aa + bb + -cc === 13) ||
        (-aa + -bb + cc === 13) ||
        (aa + -bb + -cc === 13) ||
        (-aa + bb + -cc === 13)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

runMofo(['-10 2 -1']);
runMofo(['-0 1 12']);
runMofo(['-0 0 12']);
runMofo(['-13 10000000000000 10000000000000']);
runMofo(['-0 1 12']);