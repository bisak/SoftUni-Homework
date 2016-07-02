function cmds(input) {
    let arr = [];

    for (i = 0; i < input.length; i++) {
        let cmd = input[i].split(' ')[0]
        let num = input[i].split(' ')[1]
        if(cmd == 'add'){
            arr.push(num);
        }
        if(cmd == 'remove'){
            arr.splice(num, 1)
        }
    }

    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

cmds(['add 3', 'add 5', 'remove 1', 'add 2'])