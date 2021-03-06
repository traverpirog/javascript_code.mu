"use strict";

// Если массив сохранить в новую переменную, то он не скопируется в нее,
// а просто начнет ссылаться на сам массив. Пример
let a = [1, 2, 3];
let b = a;
b[0] = true;
console.log(a); // выведет [true, 2, 3] - изменения произошли как в исходном,
// так и новом массиве

/* Задача 1⋕js.Pm.Cl.PBR.1
Не запуская код, определите, что выведется в консоль: */
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
console.log(arr2); // ['a', 2, 3]

/* Задача 2⋕js.Pm.Cl.PBR.2
Не запуская код, определите, что выведется в консоль: */
let arr12 = [1, 2, 3];
let arr22 = arr12;
arr12[0] = 'a';
arr22[1] = 'b';
console.log(arr12); // ['a', 'b', 3]


/* Задача 3⋕js.Pm.Cl.PBR.3
Не запуская код, определите, что выведется в консоль: */
let arr13 = [1, 2, 3];
let arr23 = arr13;
arr13[0] = 'a';
arr23[0] = 'b';
console.log(arr23); // ['b', 2, 3]