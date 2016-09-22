function exe([radius]) {
    console.log(Math.PI*Number(radius)*Number(radius));
    console.log((Math.PI*Number(radius)*Number(radius)).toFixed(2));
}

exe([5]);