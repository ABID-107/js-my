// var a = 10;
// while (a >= 1) {
//     // console.log(a);
//     a--;
// }
// for (var i = 10; i >= 1; i--) {
//     console.log(i)
// }

// var momGiven = 1000;

// var apple = 400;
// var orang = 300;
// var fruits = apple + orang;
// var shopReturn = momGiven - fruits;

// console.log('shop kippar return me :', shopReturn);

// var fruits = ['apple', 'banana', 'ogange']
// var indexNum = fruits.indexOf('banana');
// console.log(indexNum);
// fruits[indexNum] = 'mango';
// console.log(fruits);
// fruits.pop()
// fruits.push('watarmilon')
// console.log(fruits);

// function getArray(number) {
//     const oddNumber = [];
//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         if (element % 2 !== 0) {
//             console.log(index, element,)
//             oddNumber.push(element);
//         }
//     }
//     return oddNumber;
// }


// const myNumber = [12, 34, 54, 65, 34, 23, 21, 34]
// getArray(myNumber);


// const oddNumber = getArray(myNumber);
// console.log(oddNumber)

function getOdd(num) {
    const oddu = []
    for (let i = 0; i < num.length; i++) {
        const index = i;
        const element = num[index];
        if (element % 2 !== 0) {
            console.log(index, element)
            oddu.push(element)
        }
    }
    return oddu;
}

const odd = [12, 32, 44, 55, 66, 76, 67, 85, 75]
getOdd(odd);

const oddu = getOdd(odd)
console.log(oddu)

