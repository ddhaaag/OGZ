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
    let s = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let cos;

    if ((y1 - y2) <= 0) {
        cos = (180 / Math.PI) * (Math.acos((x2 - x1) / s));
     } else {
        cos = (180 / Math.PI) * (Math.acos((x2 - x1) / s)) * - 1 + 360;
     }
     
    cos = [0 | cos, '° ', 0|(cos < 0 ? cos = -cos : cos) % 1 * 60, "' ", 0 | cos * 60 % 1 * 60, '"'].join('');
    result.innerHTML = `S = ${s.toFixed(3)} a = ${cos}`;
}

// function сonvertDDToDMS(D){
//     return [0|D, '° ', 0|(D<0?D=-D:D)%1*60, "' ", 0|D*60%1*60, '"'].join('');
// }


// const getAlpha = () => {

//     // let x1 = +prompt('Введите x1', '');
//     // let y1 = +prompt('Введите y1', '');
//     // let x2 = +prompt('Введите x2', '');
//     // let y2 = +prompt('Введите y2', '');
//     let x1 = +inputX1.value;
//     let x2 = +inputX2.value;
//     let y1 = +inputY1.value;
//     let y2 = +inputY2.value;

//     let s = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));    

//     if ((y1 - y2) <= 0) {
//        return (180 / Math.PI) * (Math.acos((x2 - x1) / s));
//     } else {
//         return (180 / Math.PI) * (Math.acos((x2 - x1) / s)) * - 1 + 360;
//     }
// }

// let alpha = getAlpha();