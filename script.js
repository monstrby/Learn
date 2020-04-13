'use strict';
// var LeftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(4/0);
// console.log('somesring'*4);

// let Persone = {
//     name: "Alex",
//     age: 30,
//     isMarried: false
// };

// console.log(Persone);
// console.log(Persone.name);

// let arr = ["first.png","second.png","third.png"];
// console.log(arr[1]);

// alert ("Hello bitches!")
// let answer = confirm ("Anybody home ye?");
// console.log(answer);

//  let answer = +prompt ("Anybody home ye?", "No");
// console.log(typeof(answer));


// console.log("One hamster, " + "Two hamster");
// console.log(5 + " Two hamster");

// let incr = 10,
//     decr = 10;


// console.log(incr++);
// console.log(decr--);

// console.log(13%6);

// console.log("3" === 3);

// let isChecked = true,
//     isClosed = false;

// console.log(isChecked || isClosed);


// if (num < 49) {
//     console.log("Меньше 50-и!");
// } else if (num > 50) {
//     console.log("Больше 50-и!");
// } else {
//     console.log("Равно 50-и!");
// }

// (num == 50) ? console.log("Равно 50-и!") : console.log("Не равно 50-и!");



// switch (num) {
//     case num < 50:
//         console.log("Меньше 50-и!");
//         break;
//     case num > 50:
//         console.log("Больше 50-и!");
//         break;
//     case 50:
//         console.log("Равно 50-и!");
//         break;
//     default:
//         console.log("Что-то пошло не так!");
//         break;
// Первый вид цикла через while
let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// Второй тип цикла через do с последующей проверкой условия с помощью while
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// // Второй способ через while


// let i = 0;
// while (i < 2) {
   
//     let a = prompt ("Введите обязательную статью расходов в этом месяце");
//     let b = prompt ("Во сколько обойдется?");
    
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && 
//     (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
//     {
//     appData.expenses[a] = b;
//     console.log('done');
//     } else {
//          console.log ("bad result");
//          i--;
//     }
//     i++;
    
// }

// Третий способ через do while (если неверные значнения, счетчик обнуляется i--)

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце");
//     let b = prompt ("Во сколько обойдется?");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


// appData.moneyPerDay = appData.budget / 30;

// console.log(appData.expenses);

// let oneDayCost = alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);
// console.log(oneDayCost);

// if (appData.moneyPerDay < 100) {
//     console.log("Низкий уровень достатка!");
// } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 1000) {
//     console.log('Средний уровень достатка!');
// } else if (appData.moneyPerDay > 1000) {
//     console.log('Высокий уровень достатка!');
// } else {
//     console.log('Произошла ошибка!');
// }

// Simple function
/////////////////////////////////////////////////////////////////////////////////
// let num = 30;
// function showFirstMessage (text) {
//     alert(text);
//     let num = 14;
//     console.log(num);
// }
// console.log(num);

// showFirstMessage("First message from function");
// Function declaration - может выполняться до самого кода функции
// console.log(calc(5,7));

// console.log(calc(100,150));
// function calc (a,b) {
//     return(a +b);
// }


// function retVar () {
//     let alpha = 5;
//     return alpha;
// }

// let beta = retVar();
// console.log(beta);

// //Function expression выполняется только после кода функции

// let summ = function (a,b) {
//     return(a+b);
// };

// console.log(summ(3,7));

// //ES6 standart стрелочная функция
// let summES6 = (a,b) => a+b;
// console.log(summES6(1,2));

// let str = "anakonda";
// console.log(str.length);
// console.log(str.toUpperCase()); //метод переводит к верхнему регистру строку
// console.log(str.toLowerCase()); //метод переводит к нижнему регистру

// let twelwe = "12.2px";
// //console.log(Math.round(twelwe));
// console.log(parseInt(twelwe)); // метод округляет и переводит в целое число
// console.log(parseFloat(twelwe)); // метод переводит в десятичное число

function first () {
    setTimeout( function (){
        console.log(1);
    }, 500);
}
 function second (){
     console.log(2);
 }

 first();
 second();

 // Callback function (в качестве параметра callback мы передаем функцию)

//  function learnJS (lang, callback) {
//      console.log("Я учу " + lang);
//      callback();
//  }

//  learnJS("JavaScript", function () {
//      console.log("Данные взяты с коллбэк функции");
//  });

 // Создаем объект

 let options = {
    width: 1024,
    height:1024,
    name: "test"

 };

 console.log(options.name);
 options.bool = false;
 options.colors = {
    borders: "black",
    bg: "red"
 };

 delete options.bool;
 
 console.log(options);

 

 for (let key in options) {
     console.log("Свойство " + key + " имеeт значение " + options[key]);
 }
 console.log(Object.keys(options).length);
