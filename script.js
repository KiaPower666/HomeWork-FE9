// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt()
//  до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


// let number = 0;
// let counterPositive = 0;
// let counterNegativ = 0;
// let counterZero = 0;

// do {
//          let number = (prompt('Введите число'));
//          console.log(number);
//         if(number === null){
//             break;
//         }
//         number = Number(number);
//         if(number > 0){
//                 counterPositive++;
//             }if (number < 0) {
//                 counterNegativ++;
//             } if (number === 0) {
//                 counterZero++
//             }
//     } while(number !== null)

//  alert(`Положительных ${counterPositive}шт. Отрицательных ${counterNegativ}шт. Нулей ${counterZero}шт.`);

//  Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем.
//   Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.


// let number = 0;
// let counter = 0;
// let result = 0;

// while (true) {
//     let number = prompt('Введите число');
//     if(number === null){
//            alert('Отмена')
//                     break;
//                 }
//      number = Number(number);
//     result += number
//     counter++ 
//     console.log(result);
//     console.log(counter);
// }
// alert("Среднее арифметическое - " + result/counter)


// Написать программу, в которой пользователя просят ввести числа 5 раз.
// Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.

// let numberUser = 0;
// let numberMin =  -Infinity;

// for (let i = 0; i < 5; i++) {
//     let numberUser = prompt();
    
//     if (numberMin < -Infinity) {
//         console.log("Ошибка!");
//         break;
//     }
//     numberUser = Number(numberUser)
//     if (numberUser > numberMin) {
//         numberMin = numberUser
//     } else {
//         console.log("Ошибка!");
//         break;
//     }
//     console.log(numberMin);
//     console.log(numberUser);   
// }

// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу.
//  Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam"
//   Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

// let number = 0;

// while (true) {
//     let number = prompt('Введите число')
//     if (number === null) {
//         alert('Отмена') 
//         break;
//       }
//       number = Number(number);
//       if (number < 0) { 
//         alert('Введите положительное число!');
//         continue;
//       } 
    
//     let music = "param";
//     for (let i = 0; i < number; i++) {
//         music += "-pam"
//       }
//     console.log(music);
//     break;
// }