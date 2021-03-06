"use strict";

// Для выделения чисел существует функцию parseInt
// Задача 1
/*  Дана переменная со значением '5px' и переменная со значением '6px'. 
    Найдите сумму пикселей из значений этих переменных и выведите ее на экран. */
let a1 = '5px';
let b1 = '6px';
console.log(parseInt(a1) + parseInt(b1)); //11


// Задача 2
/*  Дана переменная со значением '5.5px' и переменная со значением '6.25px'. 
    Найдите сумму пикселей из значений этих переменных и выведите ее на экран. */
let a2 = '5.5px';
let b2 = '6.25px';
console.log(parseFloat(a2) + parseFloat(b2)); // 11.75

// Задача 3
/*  Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'.
    То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'. */
console.log(parseFloat(a2) + parseFloat(b2) + 'px'); // 11.75px