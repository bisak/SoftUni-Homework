function exe([input]) {
    console.log('<ul>');
    let color = "green";
    for (let i = 1; i <= Number(input); i++) {
        if (i % 2 == 0) color = "blue";
        else color = "green";
        console.log(` <li><span style='color: ${color}'>${i}</span></li>`);
    }
    console.log('<ul>');
}


exe([10]);