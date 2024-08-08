// function max(numbers) {
//     let boro = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > boro) {
//             boro = element;
//         }
//     }
//     return boro;
// }

// const friends = [120, 167, 199, 122, 111, 134, 165, 176];
// const boroHight = max(friends);
// console.log('sob cheye boro hoilo', boroHight);

// // for small hight
// function min(numbers) {
//     let choto = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element < choto) {
//             choto = element;
//         }
//     }
//     return choto;
// }

// const frnds = [120, 167, 199, 122, 111, 134, 165, 176];
// const chotoHight = min(frnds);
// console.log('sob cheye choto hoilo', chotoHight);


function string(str) {
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        console.log(element)
    }
}

const myStr = 'hello world';
const reverst = string(myStr);

function string(stre) {
    let reversd = '';
    for (let i = stre.length - 1; i >= 0; i--) {
        const element = stre[i];
        reversd = reversd + element;
        console.log(element, reversd)
    }
    return reversd;
}

const nyStr = 'hello world';
const reversd = string(nyStr);
console.log('show me: ', reversd);




const fibo = [0, 1];
for (let i = 2; i < 20; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
