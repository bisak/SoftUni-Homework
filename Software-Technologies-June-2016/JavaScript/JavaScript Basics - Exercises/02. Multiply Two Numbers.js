function multiplyNumber(nums){
    "use strict";
    let n = Number(nums[0])
    let x = Number(nums[1])
    if(x>=n) console.log(n*x)
    else console.log(n/x)
}

multiplyNumber([4,2])