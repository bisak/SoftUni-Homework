function exe([input]) {
    console.log('<div class="chessboard">');
    for (let i = 0; i < Number(input); i++) {
        console.log('<div>');
        let color = (i % 2 != 0) ? 'black' : 'white';
        for (let j = 0; j < Number(input); j++) {
            if(color == "black") color = "white";
            else color = "black";
            console.log(`<span class="${color}"></span>`);
        }
        console.log('</div>');
    }
    console.log('</div>');
}

exe([3]);