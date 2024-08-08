var evan = 10;
while (evan <= 100) {
    console.log(evan);
    evan += 2;
}

var numbers = [12, 32, 45, 67, 87, 65, 33, 6, 45, 99, 90, 98, 76, 54,];

for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        break;
    }
    console.log(number);
}

var items = ['scale', 'bath', 'monitor', 'mouse1', 'mouse2', 'my misail', 'hi-power', 'bari huzur', 'chotto picchi', 'chotto picchir ammu']

// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item === 'mouse2') {
//         break;
//     }
// console.log(item);
// }