list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function showEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        let leftoverDivision = array[i] % 2;
        if  (leftoverDivision === 0) {
            console.log(array[i]);
        } else continue;
        
    }
}

showEvenNumber(list);

