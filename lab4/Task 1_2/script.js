const form = document.createElement('form');

const inputBlocks = [];

for (let i = 0; i < 3; i++) {
    const inputBlock = document.createElement('div');
    inputBlock.classList.add('input_block');
    inputBlocks.push(inputBlock);
}

const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.innerHTML = 'Логін:';

const usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('id', 'username');
usernameInput.setAttribute('name', 'username');

inputBlocks[0].appendChild(usernameLabel);
inputBlocks[0].appendChild(usernameInput);

const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.innerHTML = 'Пароль:';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');

inputBlocks[1].appendChild(passwordLabel);
inputBlocks[1].appendChild(passwordInput);

const passwordRepeatLabel = document.createElement('label');
passwordRepeatLabel.setAttribute('for', 'password-repeat');
passwordRepeatLabel.innerHTML = 'Повторіть пароль:';

const passwordRepeatInput = document.createElement('input');
passwordRepeatInput.setAttribute('type', 'password');
passwordRepeatInput.setAttribute('id', 'password-repeat');
passwordRepeatInput.setAttribute('name', 'password-repeat');

inputBlocks[2].appendChild(passwordRepeatLabel);
inputBlocks[2].appendChild(passwordRepeatInput);

for (let i = 0; i < 3; i++) {
    form.appendChild(inputBlocks[i]);
}

const div = document.createElement('div');

const selectLabel = document.createElement('label');
selectLabel.classList.add('select_label');
selectLabel.innerHTML = 'Стать:';
div.appendChild(selectLabel);

const maleRadio = document.createElement('input');
maleRadio.setAttribute('type', 'radio');
maleRadio.setAttribute('id', 'male');
maleRadio.setAttribute('name', 'gender');
div.appendChild(maleRadio);

const maleLabel = document.createElement('label');
maleLabel.setAttribute('for', 'male');
maleLabel.classList.add('answer_label');
maleLabel.innerHTML = 'Чоловік';
div.appendChild(maleLabel);

const femaleRadio = document.createElement('input');
femaleRadio.setAttribute('type', 'radio');
femaleRadio.setAttribute('id', 'female');
femaleRadio.setAttribute('name', 'gender');
div.appendChild(femaleRadio);

const femaleLabel = document.createElement('label');
femaleLabel.setAttribute('for', 'female');
femaleLabel.classList.add('answer_label');
femaleLabel.innerHTML = 'Жінка';
div.appendChild(femaleLabel);

form.appendChild(div);

const div2 = document.createElement('div');

const cityLabel = document.createElement('label');
cityLabel.classList.add('select_label');
cityLabel.setAttribute('for', 'city');
cityLabel.innerHTML = 'Вкажіть місто';
div2.appendChild(cityLabel);

const citySelect = document.createElement('select');
citySelect.setAttribute('size', '5');
citySelect.setAttribute('name', 'city');
citySelect.setAttribute('id', 'city');

const option1 = document.createElement('option');
option1.setAttribute('value', 'zhytomyr');
option1.innerHTML = 'Житомир';

const option2 = document.createElement('option');
option2.setAttribute('value', 'kyiv');
option2.innerHTML = 'Київ';

const option3 = document.createElement('option');
option3.setAttribute('value', 'lviv');
option3.innerHTML = 'Львів';


citySelect.appendChild(option1);
citySelect.appendChild(option2);
citySelect.appendChild(option3);
div2.appendChild(citySelect);

form.appendChild(div2);

const div3 = document.createElement('div');
div3.classList.add('checkbox_select');

const checkBoxLabel = document.createElement('label');
checkBoxLabel.classList.add('select_label');
checkBoxLabel.innerHTML = 'Інтереси:';
div3.appendChild(checkBoxLabel);

const soccerLabel = document.createElement('label');
soccerLabel.classList.add('checkbox_label');
soccerLabel.setAttribute('for', 'soccer');
soccerLabel.innerHTML = 'футбол';
div3.appendChild(soccerLabel);

const soccerInput = document.createElement('input');
soccerInput.type = 'checkbox';
soccerInput.id = 'soccer';
soccerInput.name = 'interest';
div3.appendChild(soccerInput);

const chessLabel = document.createElement('label');
chessLabel.classList.add('checkbox_label');
chessLabel.setAttribute('for', 'chess');
chessLabel.innerHTML = 'шахи';
div3.appendChild(chessLabel);

const chessInput = document.createElement('input');
chessInput.type = 'checkbox';
chessInput.id = 'chess';
chessInput.name = 'interest';
div3.appendChild(chessInput);

const paintingLabel = document.createElement('label');
paintingLabel.classList.add('checkbox_label');
paintingLabel.setAttribute('for', 'painting');
paintingLabel.innerHTML = 'малювання';
div3.appendChild(paintingLabel);

const paintingInput = document.createElement('input');
paintingInput.type = 'checkbox';
paintingInput.id = 'painting';
paintingInput.name = 'interest';
div3.appendChild(paintingInput);

const musicLabel = document.createElement('label');
musicLabel.classList.add('checkbox_label');
musicLabel.setAttribute('for', 'music');
musicLabel.innerHTML = 'музика';
div3.appendChild(musicLabel);

const musicInput = document.createElement('input');
musicInput.type = 'checkbox';
musicInput.id = 'music';
musicInput.name = 'interest';
div3.appendChild(musicInput);

form.appendChild(div3);

const formButtons = document.createElement('div');
formButtons.classList.add('form_buttons');

const resetBtn = document.createElement('button');
resetBtn.type = 'reset';
resetBtn.innerHTML = 'Очистити';

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.innerHTML = 'Відправити';

formButtons.appendChild(resetBtn);
formButtons.appendChild(submitBtn);

form.appendChild(formButtons);

document.body.appendChild(form);
