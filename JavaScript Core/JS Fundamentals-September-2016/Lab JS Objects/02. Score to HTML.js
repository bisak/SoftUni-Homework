function exec([input]) {
    let objects = JSON.parse(input);
    let html = `<table>\n`;
    html+= `\t<tr><th>name</th><th>score</th></tr>\n`;
    for(let obj of objects){
        html+=`\t<tr><td>${escapeHtml(obj.name)}</td><td>${escapeHtml(obj.score)}</td></tr>\n`
    }
    html+=`</table>`
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


exec(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);