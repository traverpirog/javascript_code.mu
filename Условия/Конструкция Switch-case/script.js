"use strict";

// Синтаксис конструкции switch-case;
//  switch (переменная) {
//  	case 'значение1':
//  		/*
//  			здесь код, который выполнится в случае,
//  			если переменная имеет значение1
//  		*/
//  	break;
//  	case 'значение2':
//  		/*
//  			здесь код, который выполнится в случае,
//  			если переменная имеет значение2
//  		*/
//  	break;
//  	case 'значение3':
//  		/*
//  			здесь код, который выполнится в случае,
//  			если переменная имеет значение3
//  		*/
//  	break;
//  	default:
//  		/*
//  			здесь код, который выполнится в случае,
//  			если не совпала ни с одним значением
//  		*/
//  	break;
//  }


// Задача 1
/* Переменная num может принимать значения 1, 2, 3 или 4. 
Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее.
Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. 
Решите задачу через switch-case. */

let num1 = 3;

switch (num1) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('лето');
        break;
    case 4:
        console.log('осень');
        break;
}

// Лучше всегда использовать break. Или решать задачу через if-else. Чтобы код был более очевидным.
// switch-case необходимо использовать, если нужно проверить равенство одного значения