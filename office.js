// function array(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         const index = i;
//         const element = num[index]
//         sum = sum + element;
//         // console.log(element, index, sum);
//     }
//     return sum;
// }
// function array2(num2) {
//     let sundor = [];
//     for (let i = 0; i < num2.length; i++) {
//         const index = i;
//         const element = num2[index];
//         if (element % 2 === 0) {
//             console.log(index, element)
//             sundor.push(element)
//         }
//     }
//     return sundor;
// }

// const nam = [1, 2, 3, 4, 5, 6, 7, 8];
// const sundor = array2(nam);
// console.log(sundor)
// array(nam);
let sum = 0;
for (let i = 0; i < 8; i++) {
    sum = sum + i;
    console.log(i, sum);
}
