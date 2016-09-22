function exe([vOne, vTwo, time]) {
    let distanceOne = vOne*time/60/60;
    let distanceTwo = vTwo*time/60/60;
    console.log( Math.abs(distanceOne - distanceTwo)*1000);
}

exe([5, -5, 40])
