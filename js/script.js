// 1-задание
let modal = +prompt('Проверка число на чётное и нечётное') //надпись уловия в 'promot'


if(modal %2 === 0){//первый вариант ответа на данное условие
    alert('Это чётное число')
    console.log('чётное число');
}else{//второй вариант ответа на данное условие
    alert('Это нечётное число')
    console.log('нечётное число');
}

//2-задание
let pervoe_znach = +prompt('Первое значение')
let znachenie = prompt('Знак ддействия')
let vtoroe_znach = +prompt('Второе значение')
let ravno = '='


if (znachenie == '+'){//сумма двух значений
    console.log(pervoe_znach, znachenie, vtoroe_znach, ravno, pervoe_znach + vtoroe_znach);
}else if(znachenie == '-'){//разность двух значений
    console.log(pervoe_znach, znachenie, vtoroe_znach, ravno, pervoe_znach - vtoroe_znach);
}else if(znachenie == '*'){//множество двух значений
    console.log(pervoe_znach, znachenie, vtoroe_znach, ravno, pervoe_znach * vtoroe_znach);
}else if(znachenie == '/'){//деление двух значений
    console.log(pervoe_znach, znachenie, vtoroe_znach, ravno, pervoe_znach / vtoroe_znach);
}else {
    alert('введите пожалуйста цифры')
}


// let uvl = 9
// let umn = 10

// umn *= uvl
// console.log(umn);

// console.log(++uvl);

// let ask = +prompt('how age u')
// console.log(ask);


// //Условия
// let modal = confirm('вы хотите BMW ?')

// if(modal == true){
//     alert('Ура вы купили BMW M5')
// }else{
//     alert('Жаль что вы не купили BMW M5')
// }


// let ask_num = +prompt(number)

// if(ask_num > 20){
//     console.log('большое число');
// }else if (ask_num == 20){
//     console.log(двадцатник);
// }else if(ask_num < 20){
//     console.log('подросток');
// }else {
//     console.log('введите пожалуйста цифры');
// }



// let a = 0.1
// let b = 0.2

// console.log(a+b);




// let a = 2
// let b = '2'

// if(a == b){
//     alert('они одинаковые')
// }else{
//     alert('они разные')
// }
    

// let age = +prompt('сколько вам лет')

// if(age >= 18){
//     console.log('проходи');
// }else{
//     console.log('выйди из сайта немедленно');
// }












