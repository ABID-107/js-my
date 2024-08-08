// const form = document.getElementsByTagName('form')
// function validateForm() {
//     const form = document.forms['abid']
//     const value = form['fname'].value;

//     if (value === "text") {
//         console.log('he is in')

//     }
//     else {
//         alert('you must type name')
//         return false;
//     }

// }

// const i = setTimeout(function styleChanging() {
//     const hOne = document.querySelector('#mc');

//     hOne.style.color = "red";
//     hOne.style.fontSize = "100px";
// }, 3000)

// const x = document.getElementById('button')

// function move() {
//     const box = document.querySelector("#box")

//     let pos = 0;

//     const interval = setInterval(frem, 10);

//     function frem() {
//         if (pos < 350) {
//             pos++;
//             // box.style.bottom = pos + 'px';
//             box.style.right = pos + 'px';
//             // box.style.top = pos + 'px';
//             box.style.left = pos + 'px';

//         }
//         else {
//             clearInterval(interval);
//         }
//     }
// }

// move();
// function change() {
//     const p = document.querySelector("#click")
//     const x = document.querySelector("#click")
//     p.style.color = 'green'
//     p.style.fontSize = '50px'
//     p.innerHTML = 'WALIKUMUSSALAM WA ROHMATULLAHI WABARAKATUH'
//     x.innerHTML = 'khuda hafiz'
// }
// function chan() {

// }
// // p.addEventListener('mousedown', chan)

// const click = document.querySelector('#as')

// click.onclick = function () {
//     console.dir('hello world');
// }
// const but = document.getElementById('button')
// but.addEventListener('click', function () {
//     const x = document.getElementById('abid').innerHTML = "Abidur Rahman"
// });
// but.addEventListener('mouseout', function () {
//     const x = document.getElementById('abid').innerHTML = "Abidur"
// });
// function cool(text) {
//     console.log(text)
// }
// const container = document.getElementById('js');
// const button = document.getElementById('bs');
// container.addEventListener('click', function () {
//     cool('bye');
// }, true)

// button.addEventListener('click', function () {
//     cool('bye kallu');
// }, true)


function OTP() {
    let otp = "";
    otp = Math.floor(Math.random() * 9000 + 1000);
    return otp;
}
console.log('Your OTP is', OTP())

var a = [12, 34, 65, 78, 98, 800, 90, 1200, 330];
for (i = 0; i < a.length; i++) {
    var b = a[i];
    if (b > 100) {
        break;
    }
    console.log(b);
}