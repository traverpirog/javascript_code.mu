"use strict";

// Многомерные массивы - массивы, элементами которых являются тоже массивы
// let arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]; 
// Перепишем в более понятный вид
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
];

// Массивы могут быть двух-, трех-, четырехмерными и тд.
// Данный массив является двухмерным
// Чтобы вывести какой-либо элемент, следует писать не одну квадратную скобку, 
// а 2 скобки, пример:
console.log(arr[0][1]); // Выведет b


// Задача 1
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0])


// Задача 2
arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(arr[0][0] + arr[0][1]);
console.log(arr[1][0] + arr[1][1]);
console.log(arr[2][0] + arr[2][1]);


// Трехмерный массив
arr = [
	[
		['a', 'b'],
		['c', 'd'],
	],
	[
		['e', 'f'],
		['g', 'h'],
	],
	[
		['i', 'j'],
		['k', 'l'],
	],
];
// Для вывода используют тройные скобки
console.log(arr[0][0][0]); // выведет 'a'
console.log(arr[2][1][0]); // выведет 'k'

// Задача 3
arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(arr[0][0][0] + arr[0][0][1]);
console.log(arr[0][1][0] + arr[0][1][1]);
console.log(arr[1][0][0] + arr[1][0][1]);
console.log(arr[1][1][0] + arr[1][1][1]);


// Произвольные массивы - массивы в которых не обязательно все элементы являются массивами
arr = [
	[
		'a', 'b', [1, 2, 3], [4, 5],
	],
	[
		'd', ['e', 'f'],
	],
];

// Задача 4
arr = [
    [
        1, 2, 3, [
            4, 5, [6, 7]
        ]
    ], 
    [
        8, [9, 10]
    ]
]; 
console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]);