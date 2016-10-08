function exec(json) {
    let array = JSON.parse(json);
    let keys = [];
    let html = `<table>\n`;
    html += `\t<tr>`;
    for (let key of Object.keys(array[0])) {
        html += `<th>${key}</th>`;
        keys.push(key);
    }
    html += `</tr>\n`;

    for (let obj of array) {
        html += `\t<tr>`;
        for (let key of keys) {
            html += `<td>${escapeHtml(obj[key])}</td>`
        }
        html += `</tr>\n`;
    }


    html += `</table>`
    console.log(html)


    function escapeHtml(unsafe) {
        unsafe = String(unsafe);
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

    }
}

exec('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');