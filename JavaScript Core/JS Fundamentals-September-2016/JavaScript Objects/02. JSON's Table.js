function exec(input) {
    let html = '';
    html+=`<table>\n`;

    for (let json of input) {
        let obj = JSON.parse(json);
        html+=`\t<tr>\n`;
        html+=`\t\t<td>${escapeHtml(obj['name'])}</td>\n`;
        html+=`\t\t<td>${escapeHtml(obj['position'])}</td>\n`;
        html+=`\t\t<td>${escapeHtml(obj['salary'])}</td>\n`;
        html+=`\t<tr>\n`;
    }
    html+=`</table>\n`;
    console.log(html)

    function escapeHtml(unsafe) {
        unsafe = String(unsafe)
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

exec(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])