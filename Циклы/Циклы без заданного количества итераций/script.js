"use strict";

// Задача 1
/* Дано число num с неким начальным значением. 
Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. 
Какое число получится? Посчитайте количество итераций, необходимых для этого. */
let num = 1;

while (num < 1000) {
    num *= 3;
}

console.log(num); // 28 итераций

// Задача 2
// Решите предыдущую задачу через for

for (num = 1; num < 1000; num *= 3);
console.log(num);