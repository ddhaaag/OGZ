let inputX1 = document.querySelector('#inputX1');
let inputX2 = document.querySelector('#inputX2');
let inputY1 = document.querySelector('#inputY1');
let inputY2 = document.querySelector('#inputY2');
let button = document.querySelector('#btn');
let result = document.querySelector('.result');

button.onclick = function() {
    let x1 = +inputX1.value;
    let x2 = +inputX2.value;
    let y1 = +inputY1.value;
    let y2 = +inputY2.value;
    result.innerHTML = `S = ${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}`;
}