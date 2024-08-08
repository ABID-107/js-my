
// let goal = 10;
// while (goal < 8) {
//     console.log('7up')
//     goal += 1;
// }

// if (goal <= 7) {
//     console.log('Brazil going to world cup')
// }
// else if (goal >= 7) {
//     console.log('argentina going to world cup')
// }
// else {
//     console.log('ami kono tai support korbo na ')
// }

// let find = [12, 30, 100, 101, 500, 700, 1];

// function leargest(find) {
//     let max = 0;
//     for (i = 0; i < find.length; i++) {
//         if (max < find[i]) {
//             max = find[i]
//         }

//     }

// }
// console.log(max);
function OTP() {
    let otp = "";
    otp = Math.floor(Math.random() * 9000 + 1000);
    return otp;
}

console.log('Your OTP is', OTP());
