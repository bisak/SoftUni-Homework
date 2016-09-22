function exe([input]) {
    let line = '';
    for (var i = 0; i < input; i++) {
        line+='$';
        console.log(line);
    }
}

exe([4]);