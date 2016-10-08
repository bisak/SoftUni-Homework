function exec(input) {
    console.log(input.sort(sorter).join("\n"));
    function sorter(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }
}