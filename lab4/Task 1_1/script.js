const table = document.createElement('table');

const m = 25;
const n = 25;

for (let i = 0; i < m; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < n; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);