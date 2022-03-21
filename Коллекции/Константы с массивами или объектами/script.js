"use strict";

// Изменять свойство констант нельзя. Но в массивах и объектах, записанных в
// константу можно изменять элементы массива или свойства объекта.
const obj = {a: 1, b: 2, c: 3};
// obj = 123; // ошибка
// obj = {d: 4, e: 5, f: 6}; // ошибка
obj.a = 'a'; // Свойство изменится


/* Задача 1⋕js.Pm.Cl.Cn.1
Что выведется в результате выполнения следующего кода: */
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // ['a', '!', 'c'];


/* Задача 2⋕js.Pm.Cl.Cn.2
Что выведется в результате выполнения следующего кода: */
// const arr2 = ['a', 'b', 'c'];
// arr2 = [1, 2, 3];
// console.log(arr2); // Ошибка

/* Задача 3⋕js.Pm.Cl.Cn.3
Что выведется в результате выполнения следующего кода: */
// const arr3 = ['a', 'b', 'c'];
// arr3 = ['a', 'b', 'c'];
// console.log(arr3); // Ошибка