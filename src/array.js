studentGrades = []; 

studentGrades.push(9);
studentGrades.push(5);
studentGrades.push(7);
studentGrades.push(1);
studentGrades.push(8);
studentGrades.push(6);

console.log(studentGrades);


function averageCalculator(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }; 

    const average = total/array.length;

    return average;
}


console.log(averageCalculator(studentGrades));