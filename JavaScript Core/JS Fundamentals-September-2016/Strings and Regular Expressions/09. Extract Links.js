function extractTheLinks(input) {
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let links = [], match;
    for (let line of input) {
        while (match = regex.exec(line)) {
            links.push(match[0]);
        }
    }

    return links.join('\n');
}
