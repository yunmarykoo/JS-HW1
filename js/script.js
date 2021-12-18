var num1 = prompt('Введите первое число');
var num2 = prompt('Введите второе число');

if (num1 > num2) {
    console.log('Первое число ' + num1 + ' больше второго числа ' + num2);
} else if (num2 > num1){
    console.log('Второе число ' + num2 + ' больше первого числа ' + num1);
} else {
    console.log('Числа равны');
}