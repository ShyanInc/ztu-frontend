const body = document.querySelector('body')
const headers = document.querySelectorAll('h1')

body.style.fontFamily = 'Arial';

headers[0].style.color = 'orange';
headers[0].style.backgroundColor = 'yellow';
headers[0].style.fontSize = '16px';
headers[0].style.padding = '5px';
headers[0].style.textAlign = 'center';

headers[1].style.color = 'blue';
headers[1].style.backgroundColor = 'lightblue';
headers[1].style.fontSize = '14px';
headers[1].style.padding = '5px';
headers[1].style.textAlign = 'right';

headers[2].style.color = 'red';
headers[2].style.backgroundColor = 'lightcoral';
headers[2].style.fontSize = '12px';
headers[2].style.padding = '5px';
headers[2].style.textAlign = 'left';

const cells = document.querySelectorAll('td');

for (let i = 0; i < cells.length; i++) {
    if ((i + 1) % 2 !== 0) {
        cells[i].classList.add('selected')
    }
}
