function exec([x1,y1,x2,y2,x3,y3]) {
    let d1 = Math.sqrt(Math.pow((x1 - y1), 2) + Math.pow((x2 - y2), 2));
    let d2 = Math.sqrt(Math.pow((x2 - y2), 2) + Math.pow((x3 - y3), 2));
    let d3 = Math.sqrt(Math.pow((x3 - y3), 2) + Math.pow((x1 - y1), 2));

    console.log(d1)
    console.log(d2)
    console.log(d3)


}

exec(['-1', '-2', '3.5', '0', '0', '2']);