function exe([input]) {
    let html = `<table border="1">`;
    for (let i = 0; i <= input; i++) {
        html += `<tr>`;
        for (let j = 0; j <= input; j++) {
            let sum;
            if (i == 0 && j == 0) sum = 'x';
            else sum = i * j;
            if (i == 0 && j != 0) sum = j;
            if (sum == 0) sum = i;
            if (i == 0 || j == 0)
                html += `<th>${sum}</th>`;
            else
                html += `<td>${sum}</td>`;
        }
        html += `</tr>`;
    }
    html += '</table>';
    return html;
}

document.body.innerHTML = exe([5]);