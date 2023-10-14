const checkboxes = document.querySelectorAll('input[type="checkbox"]')

const div = document.querySelector('div');
const emails = [];
checkboxes.forEach(el => {
    el.addEventListener('change', function() {
        if (this.checked) {
            emails.push(this.value);
        }
        else {
            let index = emails.indexOf(this.value);
            if (index !== -1) {
                emails.splice(index, 1);
            }
        }
        div.innerHTML = emails.join('; ')
    })
})