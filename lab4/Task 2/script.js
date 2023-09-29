const accordionItems = [];

accordionItems.push(document.querySelector('.accordion-item'));

console.log(accordionItems[0].nextElementSibling)

for (let i = 0; accordionItems[i].nextElementSibling.classList.contains('accordion-item'); i++) {
    accordionItems.push(accordionItems[i].nextElementSibling);
}

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-item-header');
    const headerAfter = window.getComputedStyle(header, "::after")
    const body = item.querySelector('.accordion-item-body');

    header.addEventListener('click', () => {
        if (body.style.display === 'none' || body.style.display === '') {
            header.setAttribute('data-value', '-');
            body.style.display = 'block';
        } else {
            header.setAttribute('data-value', '+');
            body.style.display = 'none';
        }
    });
});