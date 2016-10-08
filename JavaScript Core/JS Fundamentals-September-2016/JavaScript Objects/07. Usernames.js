function exec(input) {
    let output = new Set();
    let outArray = input.sort(function(a, b) {
        return a.length - b.length || // sort by length, if equal then
            a.localeCompare(b);    // sort by dictionary order
    });
    outArray.forEach((x)=>output.add(x));
    Array.from(output).forEach(x=>console.log(x))
}

exec([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);