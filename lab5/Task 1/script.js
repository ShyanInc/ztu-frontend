const form = document.getElementById('form');
const elements = form.elements['lang']

const result = document.querySelector('.result')

const onSubmit = (e) => {
    e.preventDefault();

    let str = ''

    elements.forEach(el => {
        if (el.checked) {
            str += el.value + ' ';
        }
    })

    result.innerHTML = str.trim().split(' ').join(', ');
}


form.addEventListener('submit', onSubmit)
