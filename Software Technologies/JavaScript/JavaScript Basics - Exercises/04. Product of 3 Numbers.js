function productof(arr) {
    "use strict";
    let negCount = 0;
    let positive=0;
    for (let i = 0; i < 3; i++) {
        let num = Number(arr[i]);
        if (num < 0) negCount = negCount + 1;
        if(num==0)
        {
            positive=1;
            break
        }
    }
    if(positive) console.log("Positive")
    else if (negCount%2 != 0) console.log("Negative")
    else console.log("Positive")
}


productof([-5, 0, 3])