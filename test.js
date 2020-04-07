'use strict';

let money = +prompt ("Ваш бюджет на месяц?", "");
console.log(money);

let time = prompt ("Введите дату в формате YYYY-MM-DD","");
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// let questionFirst = prompt ("Введите обязательную статью расходов в этом месяце");
// console.log(questionFirst);

// let questionSecond = prompt ("Во сколько обойдется?");
// console.log(questionSecond);


// console.log(appData.expenses);
// console.log(appData);



for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце");
    let b = prompt ("Во сколько обойдется?");
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && 
    (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
    {
    appData.expenses[a] = b;
    console.log('done');
    }
    else {
        console.log ("bad result");
        i--;
    }
};

// Второй способ через while


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


appData.moneyPerDay = appData.budget / 30;

console.log(appData.expenses);

let oneDayCost = alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);
console.log(oneDayCost);

if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка!");
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 1000) {
    console.log('Средний уровень достатка!');
} else if (appData.moneyPerDay > 1000) {
    console.log('Высокий уровень достатка!');
} else {
    console.log('Произошла ошибка!');
}
