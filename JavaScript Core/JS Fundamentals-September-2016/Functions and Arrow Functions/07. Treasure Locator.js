function exec(input) {
    for (let i = 0; i < input.length; i += 2) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);
        if (x <= 3 && x >= 1 && y <= 3 && y >= 1) {
            console.log("Tuvalu");
        }
        else if (x >= 5 && x <= 7 && y <= 7 && y >= 3) {
            console.log("Samoa")
        }
        else if (x >= 0 && x <= 2 && y <= 8 && y >= 6) {
            console.log("Tonga");
        }
        else if (x >= 8 && x <= 9 && y <= 1 && y >= 0) {
            console.log("Tokelau");
        }
        else if (x >= 4 && x <= 9 && y <= 8 && y >= 7) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}

exec(['4', '2', '1.5', '6.5', '1', '3']);