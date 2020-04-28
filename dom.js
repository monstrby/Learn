let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"), //все элементы с классом heart
    oneHeart = document.querySelector(".heart"); //получаем ПЕРВЫЙ по порядку элемент с классом heart
console.log(btn);
console.log(btn[2]);
console.log(circle);
console.log(circle[1]);
console.log(heart);
console.log(heart[2]);
console.log(oneHeart);