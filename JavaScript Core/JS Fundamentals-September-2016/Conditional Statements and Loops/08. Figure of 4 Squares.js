function exe([n]) {
    let dashes = (2 * n - 4) / 2;
    let row = '';
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    console.log(row);
    let horizontals = Math.floor((dashes - 1) / 2);
    for (let c = 0; c < horizontals; c++) {
        let dashes = (2 * n - 4) / 2;
        let row2 = '';
        row2 += '|';
        for (var i = 0; i < dashes; i++) {
            row2 += ' ';
        }
        row2 += '|';
        for (var i = 0; i < dashes; i++) {
            row2 += ' ';
        }
        row2 += '|';
        console.log(row2);
    }
    dashes = (2 * n - 4) / 2;
    row = '';
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    console.log(row);
    horizontals = Math.floor((dashes - 1) / 2);
    for (let c = 0; c < horizontals; c++) {
        let dashes = (2 * n - 4) / 2;
        let row2 = '';
        row2 += '|';
        for (var i = 0; i < dashes; i++) {
            row2 += ' ';
        }
        row2 += '|';
        for (var i = 0; i < dashes; i++) {
            row2 += ' ';
        }
        row2 += '|';
        console.log(row2);
    }
    dashes = (2 * n - 4) / 2;
    row = '';
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    for (var i = 0; i < dashes; i++) {
        row += '-';
    }
    row += '+';
    console.log(row);
}

exe([7]);