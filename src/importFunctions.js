const data = [50, 90, 60, 70, 80]; 
let i = 0;

function print(text) {
    console.log(text);
}

function gets() {
    const valor = data[i];
    i++;
    return valor;
}

module.exports = {print, gets};