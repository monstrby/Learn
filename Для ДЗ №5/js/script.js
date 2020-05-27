'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;

console.log(menu);

// let btn = document.getElementsByClassName('menu-item'), //получаем массив элементов с классом menu-item
//     menu = document.querySelector('.menu'), // получаем родителя нашего списка меню (это nav с классом .menu)
//     fiveBtn = document.createElement('li'), // создаем новый элемент списка меню (Пятый пункт)
//     title = document.getElementById('title'), //получаем содержимое дива с айди title
//     newTitle = document.createElement('div'),
//     column = document.getElementsByClassName('column');

// menu.insertBefore(btn[2], btn[1]); //ставим второй пункт меню на свое место (навигационное меню по порядку)
// fiveBtn.classList.add('menu-item'); //добавляем новому элементу списка нужный нам класс
// fiveBtn.textContent = "Пятый пункт"; //добавляем текст элементу списка
// menu.appendChild(fiveBtn); // добавляем созданный элемент списка в конец списка меню
// document.body.style.backgroundImage = "url('../img/apple_true.jpg')";
// newTitle.classList.add('title');
// newTitle.
// newTitle.textContent = "Мы продаем только подлинную технику Apple";
// column.replaceChild(column[1], newTitle);



