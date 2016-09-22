function quad(form) {
    let a = Number(form[0]);
    let b = Number(form[1]);
    let c = Number(form[2]);
    let x1 = -b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    let x2 = -b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    if (isNaN(x1) || isNaN(x2)) {
        console.log("no");
        return;
    }
    if (x1 > x2) [x1, x2] = [x2, x1];
    console.log(x1);
    if (x1 == x2) return;
    console.log(x2);
}