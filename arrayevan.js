function getSumOfArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumber = [12, 34, 54, 65, 78, 98, 32]
getSumOfArray(myNumber);
