function result(input) {
    function srt(a, b){
        if(a[1] < b[1]){
            return -1;
        }else if(a[1] > b[1]){
            return 1;
        }
        return 0;
    }

    let outObj = {};
    let sorted = [];
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        let obj = arguments[i];
        console.log(type + ": " + obj);
        if (outObj[type]) {
            outObj[type]++;
        } else {
            outObj[type] = 1;
        }
    }
    for(let current in outObj){
        sorted.push([current, outObj[current]])
    }
    sorted = sorted.sort((a,b) => b[1]-a[1]);
    for(let i = 0 ; i < sorted.length; i++){
        console.log(sorted[i][0] + ' = ' + sorted[i][1]);
    }
}

result({ name: 'bob'}, 3.333, 9.999);