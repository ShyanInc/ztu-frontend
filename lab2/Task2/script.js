function findAllOccurrences(string, substring) {
    const occurrences = [];
    let index = string.indexOf(substring);

    while (index !== -1) {
        occurrences.push(index);
        index = string.indexOf(substring, index + 1);
    }

    return occurrences;
}

function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1)
    return newTxt;
}


let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam error ex fugit incidunt nisi reprehenderit saepe veritatis. Aliquam dolorum ducimus facere perferendis sed? Deleniti ea expedita quibusdam soluta voluptatum!';
let str = text[12] + text[6] + text[18] + text[25];

console.log(str)
console.log('Lower case text:', text.toLowerCase())

const occurrences = findAllOccurrences(text, 'in');
console.log('all occurrences of \'in\' substring in text are at indexes:', occurrences);

const textArray = text.split(' ');
console.log('Array of split text to words:', textArray)

const reversedText = text.split('').reverse().join('');
console.log(reversedText);

console.log('Capitalized first letter: ', ucFirst('hello World'));