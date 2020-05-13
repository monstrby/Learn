let btn = document.getElementsByClassName('menu-item'), //получаем массив элементов с классом menu-item
    menu = document.querySelector('.menu'), // получаем родителя нашего списка меню (это nav с классом .menu)
    fiveBtn = document.createElement('li'); // создаем новый элемент списка меню (Пятый пункт)
   

menu.insertBefore(btn[2], btn[1]); //ставим второй пункт меню на свое место (навигационное меню по порядку)
fiveBtn.classList.add('menu-item'); //добавляем новому элементу списка нужный нам класс
fiveBtn.textContent = "Пятый пункт"; //добавляем текст элементу списка
menu.appendChild(fiveBtn); // добавляем созданный элемент списка в конец списка меню
document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

