function solution([input]) {
    let spice = Number(input);
    let mined = 0;
    let days = 0;

    while (true) {
        if (spice < 100) break;
        let toAdd = spice - 26;
        spice -= 10;
        mined += toAdd;
        days++;
    }

    mined -= 26;

    console.log(days);
    console.log(mined)

}

solution(["111"])