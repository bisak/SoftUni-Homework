function runMofo([input]) {
    input = Number(input);
    console.log(`${".".repeat(input - 1)}_/_${".".repeat(input - 1)}\n/${".".repeat(input - 2)}^,^${".".repeat(input - 2)}\\`);
    process.stdout.write(`|${".".repeat((input * 2) - 1)}|\n`.repeat(input - 3));
    console.log(`\\${".".repeat(input - 2)}\\_/${".".repeat(input - 2)}/`);
}

runMofo(['3'])
console.log();
runMofo(['4'])
console.log()
runMofo(['5'])