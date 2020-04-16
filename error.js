function hello() {
    console.log("Hello!");
}
hello();

function hi() {
    console.log("Hi");
}
hi();

let arr = [1,2,3,45,67];
let sortaArr = arr.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(arr);