function solution(input) {
    let numbers = input.map(Number).filter(x => x > 10).map(x => Math.trunc(x));
    let html = `
<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>\n`;
    for (let number of numbers) {
        let result = number % 5;
        let bladeType = "";
        let type = "";
        if (number > 40) type = "sword";
        else type = "dagger";
        if (result == 0) bladeType = '*rap-poker';
        if (result == 1) bladeType = 'blade';
        if (result == 2) bladeType = 'quite a blade';
        if (result == 3) bladeType = 'pants-scraper';
        if (result == 4) bladeType = 'frog-butcher';
        html += `<tr><td>${number}</td><td>${type}</td><td>${bladeType}</td></tr>\n`
    }
    html += `</tbody>\n</table>`;
    console.log(html)
}

solution(
    [
        "17.8",
        "19.4",
        "13",
        "55.8",
        "126.96541651",
        "3"
    ]
)