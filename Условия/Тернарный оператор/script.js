"use strict";

// Тернарный оператор используется, если условие выполняет какое-то одно действие
// Синтаксис его такой
// let переменная = условие ? значение1 : значение2;
// Оператор работает так: если условие истинно, то возвращается значение1, 
// в противном случае - значение2

// Пример:
let age = 17;
/* let adult;

if (age >= 18) {
	adult = true; // Выполняет одно действие
} else {
	adult = false; // Выполняет одно действие
} */

// Благодаря тернарному оператору конструкцию можно переписать
let adult = age >= 18 ? true : false; // Выведет false


// Задача 1 
/* Пусть дана переменная num, которая может быть либо отрицательной, либо положительной. 
Запишите в переменную result число 1, если переменная num больше или равна нулю, и число -1, 
если переменная num меньше нуля. */

let num = 1;
let result = num >= 0 ? 1 : -1;
console.log(result);


/* Замечания
Тернарный оператор следует использовать только в самых простых случаях, 
так как его использование затрудняет понимание кода. */