'use strict';
let total = 0;
const btnNums = document.querySelectorAll ('.btnum');
const btnOperators = document.querySelectorAll ('.btnop');
const btnEquals = document.querySelectorAll ('.btnequals');
const btnClear = document.querySelectorAll ('.btnclear');
let results = document.querySelectorAll('.result');
let num1 = '';
let num2 = '';
let currentNum = '';
let sign = '';
let count = 0;
let previousSign = '';


btnNums.forEach((btnNum) => {
    btnNum.addEventListener('click', (e) => {
    if (count > 0){num2 += btnNum.innerHTML; results[0].innerHTML += btnNum.innerHTML;}
    else {num1 += btnNum.innerHTML; results[0].innerHTML += btnNum.innerHTML;}
})
})


    
btnOperators.forEach((btnOperator) => {
    btnOperator.addEventListener('click', (e) => {
    count ++;
    results[0].innerHTML = '';
    previousSign = '';
    if(count > 1){previousSign = sign;}
   if (btnOperator.innerHTML == '+'){sign = add;}
   else if (btnOperator.innerHTML == '-'){sign = subtract;}
   else if (btnOperator.innerHTML == 'x'){sign = multiply;}
   else if (btnOperator.innerHTML == '/'){sign = divide;}
   if(previousSign != sign && sign != '' && previousSign != ''){num1 = operate(previousSign,num1,num2).toString(); num2 = '';}
   else if (count > 1){num1 = operate(sign,num1,num2).toString(); num2 = '';}
})
})

btnEquals[0].addEventListener('click', (e) => {
if (num1 == '' || num2 == '') {results[0].innerHTML = 'Error';}
else if (sign === divide && num1 == '0' || num2 == '0'){results[0].innerHTML = 'You Lose!';}
 else {
        results[0].innerHTML = '';
        num1 = operate(sign,num1,num2).toString(); num2 = '';
        if(num1 % 1 != 0){
        num1 = (+num1).toFixed(2);
            results[0].innerHTML = num1;
                    count = '';
        }else {
        results[0].innerHTML = +num1;
        count = '';
}
}
})

btnClear[0].addEventListener('click', (e) => {
    num1 = '';
    num2 = '';
    currentNum = '';
    sign = '';
    count = 0;
    previousSign = '';
    total = 0;
    results[0].innerHTML = '';
});

const add = (num1,num2) => {total = parseInt(num1) + parseInt(num2);}
const subtract = (num1,num2) => {total =  parseInt(num1) - parseInt(num2)}
const multiply = (num1,num2) => {total = parseInt(num1) * parseInt(num2)}
const divide = (num1,num2) => {total =  parseInt(num1) / parseInt(num2)}


const operate = (operator,num1,num2) => {
switch (operator) {
    case add:
    add(num1,num2);
    break;
    case subtract:
    subtract(num1,num2);
    break;
    case multiply:
    multiply(num1,num2);
    break;
    case divide:
    divide(num1,num2);
    break;
    default:
    return "Error";
    }
    
    return total;
}
