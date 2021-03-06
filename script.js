// 1-й способ
// let button = document.querySelector('#btn');

// function f1() {
//     let x1 = +document.getElementById('inputX1').value;
//     let x2 = +document.querySelector('#inputX2').value;
//     let y1 = +document.querySelector('#inputY1').value;
//     let y2 = +document.getElementById('inputY2').value;
//     let result = document.querySelector('.result');

//     let s = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     let cos;

//     if ((y1 - y2) <= 0) {
//         cos = (180 / Math.PI) * (Math.acos((x2 - x1) / s));
//      } else {
//         cos = (180 / Math.PI) * (Math.acos((x2 - x1) / s)) * - 1 + 360;
//      }
     
//     cos = [0 | cos, '° ', 0|(cos < 0 ? cos = -cos : cos) % 1 * 60, "' ", 0 | cos * 60 % 1 * 60, '"'].join('');
//     // result.innerHTML = `S = ${s.toFixed(3)}  a = ${cos}`;
//     result.innerHTML = 'S = ' + s.toFixed(3) + '\n' + 'α = ' + cos; 
//     // result.innerHTML += `a = ${cos}`;
// }

// document.querySelector('#btn').onclick = f1;



// 2-й способ

// function onClick() {
//     if (checkInputsEmpty()) {
//         return result_empty.textContent = `Заполните, пожалуйста, все поля!!!`;
//     } else {
//         updateResult();
//     }
// }

// function checkInputsEmpty() {
//     if (getNumberX1() === '' || getNumberY1() === '' || getNumberX2() === '' || getNumberY2() === '') {
//         return true;
//     }   else {
//         return false;
//     }
// }

// function updateResult() {
//    (3) + '\n' + 'α = ' + transitFromDeg; 
//     result.textContent = `${showResultS()}`;
//     alpha_result.textContent = `${showResultα()}`;
// }

// function showResultS() {
//     let s = getHorizontalDistance();
//     return result.textContent = s.toFixed(3);
// }

// function showResultα() {
//     let α = getDirectionalAngle();
//     let transitFromDeg = [0 | α, '° ', 0|(α < 0 ? α = -α : α) % 1 * 60, "' ", 0 | α * 60 % 1 * 60, '"'].join('');
//     return alpha_result.textContent = transitFromDeg;
// }

// function getHorizontalDistance() {
//     return Math.sqrt(Math.pow(getDeltaX(), 2) + Math.pow(getDeltaY(), 2));
// }

// function getDeltaX() {
//     let x1 = getNumberX1();
//     let x2 = getNumberX2();
//     return x2 - x1;
// }

// function getDeltaY() {
//     let y1 = getNumberY1();
//     let y2 = getNumberY2();
//     return y2 - y1;
// }


// function getDirectionalAngle() {
//     let y1 = getNumberY1();
//     let y2 = getNumberY2();
//     let x1 = getNumberX1();
//     let x2 = getNumberX2();
//     let s = getHorizontalDistance();

//     if ((y1 - y2) <= 0) {
//         return (180 / Math.PI) * (Math.acos((x2 - x1) / s));
//     } else {
//         return (180 / Math.PI) * (Math.acos((x2 - x1) / s)) * - 1 + 360;
//     }
// } 

// function getNumberX1() {
//     return inputs[0].value;
// }

// function getNumberY1() {
//     return inputs[1].value;
// }

// function getNumberX2() {
//     return inputs[2].value;
// }

// function getNumberY2() {
//     return inputs[3].value;
// }

// let inputs = document.querySelectorAll('input');
// let result = document.querySelector('.result');
// let result_empty = document.querySelector('.result_empty');
// let alpha_result = document.querySelector('.alpha_result');
// let button = document.querySelector('#btn');
// button.addEventListener('click', onClick);
// button.addEventListener('click', showOut);

// let elem = document.querySelector('.hidden');
// function showOut() {
//     elem.classList.add('show');
// } 


// 3-й способ 


// const form = document.querySelector('form');

// form.addEventListener('submit', runEvent);




function onClick() {
    document.getElementById('form').addEventListener('submit', showOut);
    result.textContent = `${showResultS()}`;
    alpha_result.textContent = `${showResultα()}`;
}

function showResultS() {
    let s = getHorizontalDistance();
    return result.textContent = s.toFixed(3);
}

function getHorizontalDistance() {
    return Math.sqrt(Math.pow(getDeltaX(), 2) + Math.pow(getDeltaY(), 2));
}

function getDeltaX() {
    let x1 = getNumberX1();
    let x2 = getNumberX2();
    return x2 - x1;
}

function getDeltaY() {
    let y1 = getNumberY1();
    let y2 = getNumberY2();
    return y2 - y1;
}

function showResultα() {
    let α = getDirectionalAngle();
    let transitFromDeg = [0 | α, '° ', 0|(α < 0 ? α = -α : α) % 1 * 60, "' ", 0 | α * 60 % 1 * 60, '"'].join('');
    return alpha_result.textContent = transitFromDeg;
}

function getDirectionalAngle() {
    let y1 = getNumberY1();
    let y2 = getNumberY2();
    let x1 = getNumberX1();
    let x2 = getNumberX2();
    let s = getHorizontalDistance();

    if ((y1 - y2) <= 0) {
        return (180 / Math.PI) * (Math.acos((x2 - x1) / s));
    } else {
        return (180 / Math.PI) * (Math.acos((x2 - x1) / s)) * - 1 + 360;
    }
} 


function getNumberX1() {
    return inputs[0].value;
}
    
function getNumberY1() {
    return inputs[1].value;
}
    
function getNumberX2() {
    return inputs[2].value;// document.getElementById('form').addEventListener('submit', showOut);
}
    
function getNumberY2() {
    return inputs[3].value;
}

let inputs = document.querySelectorAll('input');
let result = document.querySelector('.result');
let result_empty = document.querySelector('.result_empty');
let alpha_result = document.querySelector('.alpha_result');
let button = document.querySelector('#btn');
button.addEventListener('click', onClick);
// button.addEventListener('submit', showOut);

// Добавляем на страницу и убираем действие по дефолту submit
let elem = document.querySelector('.hidden');
function showOut(e) {
    elem.classList.add('show');
    e.preventDefault();
} 