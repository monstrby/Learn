'use strict';
let money, time; //объявляем глобальные переменные
function start () {

    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD","");

    // добавляем проверку переменной money (является ли значение строкой, не пустое ли поле, не равно 
    // значение null (то есть не нажал ли пользователь клавишу Отмена в нашем prompt)) Пишем цикл 
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpanses: function () {
        for (let i = 0; i < 1; i++) {
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
        }
    },
    detectDayBudget: function () {
        if (appData.budget !== null) {
            appData.moneyPerDay = (appData.budget / 30).toFixed(); 
            //добавляем метод что бы получить фиксированное число
            alert("Ваш бюджет на 1 день равен " + appData.moneyPerDay);
        }  
    },
    detectlevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка!");
        } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 1000) {
            console.log('Средний уровень достатка!');
        } else if (appData.moneyPerDay > 1000) {
            console.log('Высокий уровень достатка!');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt ("Сумма ваших накоплений?");
            let percent = +prompt ("Под какой процент?");
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }   
    },
    chooseOptExpenses: function () {
        for ( let i = 0; i < 3; i++ ) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
    
            if ( (typeof(questionOptExpenses)) === "string" && (typeof(questionOptExpenses)) != null 
            && questionOptExpenses != "" && questionOptExpenses.length <50) {
                 appData.optionalExpenses[i] = questionOptExpenses;
                
            } else {
                console.log("Какая то хуйня");
            }
    
        } 
    
    },
    chooseIncome: function() {
        for ( let i = 0; i < 1; i++ ) {
            let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)");
            let addItems = prompt("Может что-то еще?");
                if ( (typeof(items)) === "string" && (typeof(items)) != null 
                && items != "" && (typeof(addItems)) === "string" && (typeof(addItems)) != null 
                && addItems != "" ) {    
                appData.income = items.split(", ");                
                appData.income.sort();
                break;
                } else {
                    i--;
                }
            }
        for ( let i = 0; i < 1; i++ ) {
            let addItems = prompt("Может что-то еще?");
                if ( (typeof(addItems)) === "string" && (typeof(addItems)) != null 
                && addItems != "" ) {    
                appData.income.push(addItems.split(", "));                
                appData.income.sort();
                } else {
                    i--;
                }
        }
        }
    
};









