let input = document.querySelector('.numberInput');
let para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
let x = num;
while (x > 1) {
    num *= x-1;
    x--;
}

return num;

}

input.onchange = function() {
    let num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    }   else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
                            num + ' cubed is ' + cubed(num) + '. ' +
                            num + ' factorial is ' + factorial(num) + '.';
    }
}