function exe(pairs) {
    let xml = ``;
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`    <quiz>`)
    for (let i = 0; i < pairs.length; i += 2) {
        console.log(`        <question>`);
        console.log(pairs[i])
        console.log(`        </question>`)
        console.log(`        <answer>`)
        console.log(pairs[i + 1])
        console.log(`        </answer>`)

    }
    console.log(`</quiz>`);
}
