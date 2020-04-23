// // Динамическая типизация (изменения типов данных)

// ///////////////// to String /////////////////////
// // 1 Способ через String() - устаревший метод

// console.log(typeof(String(13)));

// // 2 Способ конкатенация (при сложении строки с любым типом данных получим строку)

// console.log("Строка" + 5);
// console.log(typeof("Строка" + 5));

// ////////////////// to Number ///////////////////////////

// // 1 Способ через Number() - устаревший метод

// console.log(typeof(Number("13")));
// console.log(Number("13"));

// // 2 Способ через унарный + (плюс)

// console.log(typeof(+"11"));

// // 3 Способ через parseInt()

// console.log(parseInt("13px"));
// console.log(typeof(parseInt("10px")));

// ////// Работа с логическими объектами /////////////////////////
// // 0,'', null, undefined, NaN - всегда FALSE

// let switcher = null;

// if (switcher) {
//     console.log("Переменная true");
// } else {
//     console.log("Переменная false");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Переменная true");
// } else {
//     console.log("Переменная false");
// }

// // Способ через Boolean()

// console.log(typeof(Boolean("13")));
// console.log(Boolean(""));

// // Способ через !! (два восклицательных знака)

// console.log(typeof(!! "13"));


let x = 5;
console.log(x ++); //5

console.log([]+false-null+true); // NaN

let y = 1;
let z = y = 2;
console.log(x); //2

console.log([] + 1 + 2);//12

console.log("1"[0]); //1

console.log(2 && 1 && null && 0 && undefined); //null

console.log(null || 2 && 3 || 4); //3

let one = [1,2,3];
let two = [1,2,3];
console.log(one == two); //false

console.log(+"Infinity" ); //Infinity

console.log("Ёжик" > "яблоко"); //false

console.log(0 || "" || 2 || undefined || true || falsе); //2

