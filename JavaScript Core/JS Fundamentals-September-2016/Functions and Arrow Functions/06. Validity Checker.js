function exec([x1,y1,x2,y2]) {
    let d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let d3 = Math.sqrt(Math.pow((x1 - y1), 2) + Math.pow((x2 - y2), 2));

    if (Number.isInteger(d1)) console.log("{" + x1 + ", " + y1 + "} to {0, 0} is valid"); else console.log("{" + x1 + ", " + y1 + "} to {0, 0} is invalid");
    if (Number.isInteger(d2)) console.log("{" + x2 + ", " + y2 + "} to {0, 0} is valid"); else console.log("{" + x2 + ", " + y2 + "} to {0, 0} is invalid");
    if (Number.isInteger(d3)) console.log("{" + x1 + ", " + y1 + "} to " + "{" + x2 + ", " + y2 + "}" + " is valid"); else console.log("{" + x1 + ", " + y1 + "} to " + "{" + x2 + ", " + y2 + "}" + " is invalid")
}

exec(['0', '0', '0', '0']);