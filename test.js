'use strict';

let money = prompt ("Ваш бюджет на месяц?", "");
console.log(money);

let time = prompt ("Введите дату в формате YYYY-MM-DD","");
console.log(time);

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let questionFirst = prompt ("Введите обязательную статью расходов в этом месяце");
console.log(questionFirst);

let questionSecond = prompt ("Во сколько обойдется?");
console.log(questionSecond);

appData.expenses[questionFirst] = questionSecond;
console.log(appData.expenses);
console.log(appData);

let oneDayCost = alert("Ваш бюджет на 1 день равен " + appData.budjet / 30);
console.log(oneDayCost);


