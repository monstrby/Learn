let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"), //все элементы с классом heart
    oneHeart = document.querySelector(".heart"), //получаем ПЕРВЫЙ по порядку элемент с классом heart
    wrapper = document.querySelector(".wrapper"); //получаем первый (он у нас один) элемент с классом wrapper
// console.log(btn);
// console.log(btn[2]);
// console.log(circle);
// console.log(circle[1]);
// console.log(heart);
// console.log(heart[2]);
// console.log(oneHeart);
box.style.backgroundColor = 'black';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//изменения стилей элементов массива через цикл for
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'yellow';
// }

//изменение стилей элементов массива через метод forEach и колбэк функцию
// heart.forEach(function(item, i, arrayHearts) {
//     item.style.backgroundColor = 'blue';
// });

// создание элементов с помощью elementCreate
let div = document.createElement('div'),
    text = document.createTextNode('Вставка текста с помощью JS');



div.classList.add('black'); //добавление класс к элементу
//document.body.appendChild(div); //добавление созданного дива на страницу (в конец body)
//wrapper.appendChild(div); //добавление дива в конец обертки wrapper

//div.innerHTML = '<h2>Hello!</h2>'; //добавление текста на страницу (даже с разметкой)
div.textContent = 'Привет!'; //добавление текста на страницу (если нужно вставить текст пользователя)


document.body.insertBefore(div, circle[0]); //добавление дива перед указанным элементом (указывается)
//как второе значение (в данном случаем первый элемент массива circle[0])
document.body.removeChild(circle[1]); //удаление элемента 
wrapper.removeChild(heart[1]); //удаление элемента из родителя wrapper
document.body.replaceChild(heart[1], btn[1]); //замена одного элемента на другой (сердце ставим вместо кнопы)

console.log(div);
console.log(text);

