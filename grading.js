// var marks = 95;

// if (marks < 100 && marks > 90) {
//     console.log('you got Golden A+')
// } else if (marks < 90 && marks > 80) {
//     console.log('you got A+')
// } else if (marks < 80 && marks > 70) {
//     console.log('you got A')
// } else if (marks < 70 && marks > 60) {
//     console.log('you got B')
// } else if (marks < 60 && marks > 50) {
//     console.log('you got C')
// } else if (marks < 50 && marks > 40) {
//     console.log('you got D')
// } else if (marks < 40 && marks > 33) {
//     console.log('you got E')
// } else {
//     console.log('you are fail')
// }

// function sum(num1, num2) {
//     console.log(num1, num2)
//     var sum = num1 + num2;
//     console.log(sum);
// }

// sum(10, 30);

// function ibrahim(marks1, marks2, marks3) {
//     console.log(marks1, marks2, marks3)
//     var total = marks1 + marks2 + marks3;
//     var avarage = total / 3;
//     return avarage;
// }

// var bangla = 75;
// var english = 85;
// var math = 95;

// var all = ibrahim(bangla, english, math);
// console.log(all);



var kenaKata = {
    alu: '20kg',
    potol: '10kg',
    begun: '5kg',
    lau: '5pis'
}

var findVagitable = Object.keys(kenaKata);
var findValues = Object.values(kenaKata);

// console.log(findVagitable);
// console.log(findValues);


for (var i = 0; i < findVagitable.length; i++) {
    var loop1 = findVagitable[i];
    var loop2 = kenaKata[loop1];
    console.log(loop1, loop2);
}

var anNur = {
    students: 100,
    teacher: 10,
    classRoom: 10,
    sttuf: 20,
}

var kyes = Object.keys(anNur);
var values = Object.values(anNur);

// console.log(kyes);
// console.log(values);

for (var i = 0; i < kyes.length; i++) {
    var propertise = kyes[i];
    var valuesName = anNur[propertise];
    console.log(propertise, valuesName);
}

const myHight = 5.4;
const inch = myHight * 12;
let n = inch.toFixed(2);

console.log(n);



// var feet = parseInt(prompt("Please enter feet:"));
// var inches = feet * 12;
// console.log(inches + " Inches");



function evanOrOdd(number) {
    if (number % 2 == 0) {
        console.log('this is evan: ')
    }
    else {
        console.log('it is Odd number :')
    }
}

evanOrOdd(11);