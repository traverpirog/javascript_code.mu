"use strict";

// Функция confirm
// Схожа с alert и prompt, но предлагает пользователю выбор "Да" или "Нет"
// Если пользователь нажмет "Да" - в значение запишется true
// Если пользователь нажмет "Нет" - в значение запишется false

// Задача 1
/*  Спросите у пользователя, есть ли ему уже 18 лет. 
    Если есть - выведите на экран алерт с текстом для взрослых, 
    а если нет, выведите сообщение о том, что доступ пользователю запрещен. */
let question = confirm('Для продолжения необходимо подтвердить, что вам исполнилось 18 лет! Нажмите "Да", если вы уже совершеннолетний или "Нет", если вам нет 18 лет.');
let result = question ? alert('Добро пожаловать на сайт для взрослых') : alert('Доступ запрещен!');