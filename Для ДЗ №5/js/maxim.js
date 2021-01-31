'use strict';

let month;

function checkMonth () {

    let month = prompt ("Введите любимый месяц в году", "");
    let upMonth = month.toUpperCase();

    if (typeof(month) != "string" || month == "" || typeof(month) == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
    console.log(month.toUpperCase());
    switch (upMonth) {
        case 'ЯНВАРЬ' :
            alert('Пора года - зима!');
            break;
        case 'ФЕВРАЛЬ':
            alert('Пора года - зима!');
            break;
        case 'МАРТ':
            alert('Пора года - весна!');
            break;
        case 'АПРЕЛЬ':
            alert('Пора года - весна!');
            break;
        case 'МАЙ':
            alert('Пора года - весна!');
            break;
        case 'ИЮНЬ':
            alert('Пора года - лето!');
            break;
        case 'ИЮЛЬ':
            alert('Пора года - лето!');
            break;
        case 'АВГУСТ':
            alert('Пора года - лето!');
            break;
        case 'СЕНТЯБРЬ':
            alert('Пора года - осень!');
            break;
        case 'ОКТЯБРЬ':
            alert('Пора года - осень!');
            break;
        case 'НОЯБРЬ':
            alert('Пора года - осень!');
            break;
        case 'ДЕКАБРЬ':
            alert('Пора года - зима!');
            break;
        default:
            alert('Проверьте правильность написания названия месяца!');
    
    }
    }
}

checkMonth();








