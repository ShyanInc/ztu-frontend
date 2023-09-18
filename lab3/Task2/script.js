const tables = document.querySelectorAll('.table');

for (let table of tables) {
    const tds = table.querySelectorAll('table tr td');

    for (let i = 1; i < tds.length; i += 2) {
        tds[i].classList.add('selected')
    }
}