let number_1 = document.getElementById('field_1');
let number_2 = document.getElementById('field_2');
let operation = document.getElementById('operation');
let submit = document.getElementById('submit');
let result = document.getElementById('result');

function calculateResult() {
    let total = 0;
    switch (operation.value) {
        case '+':
            total = eval(number_1.value) + eval(number_2.value);
            break;
        case '-':
            total = eval(number_1.value) - eval(number_2.value);
            break;
        case '*':
            total = eval(number_1.value) * eval(number_2.value);
            break;
        case '/':
            total = eval(number_1.value) / eval(number_2.value);
            break;
        default:
        // code block
    }

    result.innerHTML = total;

}

number_1.addEventListener("change", calculateResult);
number_2.addEventListener("change", calculateResult);
submit.addEventListener("click", calculateResult);
