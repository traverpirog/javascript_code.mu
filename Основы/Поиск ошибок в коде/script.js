"use strict";

/* Задача 1
Код должен находить сумму чисел: */
let num1 = 1;
let num2 = 2;
// console.log('сумма: ' + num1 + num2); - здесь ошибка, числа сложатся, как строки
console.log('сумма: ' + (num1 + num2)); // Правильное решение

/* Задача 2
Код должен находить сумму чисел: */
let a = 1;
let b = 2;
// console.log(a + b + c); // Выведет ошибку, не объявлена переменная
let c = 3;
console.log(a + b + c); // Правильное решение

/* Задача 3
Код должен находить сумму цифр числа: */
let num3 = '123';
// let sum = num[0] + num[1] + num[2]; // Произойдет сложение строк
let sum = Number(num3[0]) + Number(num3[1]) + Number(num3[2]); // Правильное
console.log(sum); 


/* Задача 4
Код должен вывести первую цифру числа: */
let num4 = 123;
let numStr4 = String(num4);
console.log(num4[0]); // Неверно, будет undefined
console.log(numStr4[0]); // Верно


/* Задача 5
Код должен был вывести в консоль число 1, но выводит 0: */
let a5 = 0;
console.log(a5++); // Потому что переменная не успела записать сложение
let b5 = 0;
console.log(++b5); // Правильное решение


/* Задача 6
Код должен вывести количество цифр в числе: */
let num6 = 123;
console.log(num6.length); // Будет undefined, потому что это не строка
console.log(String(num6).length); // Правильное решение


/* Задача 7
Код должен найти количество секунд в сутках: */
let a7 = 24 / 60 / 60; // Неправильная формула
console.log(a7);
let b7 = 24 * 60 * 60;
console.log(b7); // Правильное решение

/* Задача 8
Код должен вывести количество цифр в числе: */
let num8 = 123;
let str8 = String(num8);
console.log(num8.length); // Выведет undefined, потому что неправильный тип данных и не та переменная
console.log(str8.length); // Правильное решение

