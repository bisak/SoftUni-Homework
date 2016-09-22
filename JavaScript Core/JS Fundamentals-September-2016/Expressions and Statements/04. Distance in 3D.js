function exe([x1,y1,z1,x2,y2,z2]) {
    [x1,y1,z1,x2,y2,z2].map(Number)
    console.log(Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2) + Math.pow(z2-z1, 2)));
}

exe([1, 1, 0, 5, 4, 0]);