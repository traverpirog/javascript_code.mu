"use strict";

// Функция prompt позволяет получить от пользователя какие-либо данные
// prompt('Введите имя:'); // Выйдет окно с инпутом
// Чтобы записать результат, нужно присвоить его переменной
/* let name = prompt('Введите имя:');
alert('Вы ввели - ' + name); */

// Функция всегда возвращает строку, даже если пользователь ввел число



/* Задача 4
С помощью двух функций prompt спросите у пользователя стороны прямоугольника.
Выведите на экран периметр введенного прямоугольника. */

let q1 = prompt('Введите сторону a:');
let q2 = prompt('Введите сторону b:');
alert('Периметр прямоугольника - ' + (Number(q1) + Number(q2)));