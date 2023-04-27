const {print, gets} = require('./importFunctions');

const drawnNumbers = [];


for (let i = 0; i < 5; i++) {
    const number = gets();
    drawnNumbers.push(number);

}

function maxNumberArray(array) {
    let maxNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

print(drawnNumbers);
print(maxNumberArray(drawnNumbers));
