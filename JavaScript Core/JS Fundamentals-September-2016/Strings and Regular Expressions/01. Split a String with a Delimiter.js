function exec([first,second]) {
    console.log(first.split(second).join("\n"));
}

exec(['One-Two-Three-Four-Five', '-']);