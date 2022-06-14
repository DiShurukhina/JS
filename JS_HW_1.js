// Создать переменную “item_1”
// Присвоить переменной item_1 цифру 5.
let item_1 = 5;
// Вывести в консоль item_1.
console.log(item_1);

// Создать переменную “item_2”
// Присвоить переменной item_2 цифру 3.
let item_2 = 3;
// Вывести в консоль item_2.
console.log(item_2);

// Создать переменную “item_3”
// Присвоить переменной item_3 сложение item_1 и item_2.
let item_3 = item_1 + item_2;
// Вывести в консоль item_3.
console.log(item_3);

//  Создать переменную “item_4”
//  Присвоить переменной item_4 строку “Yolochka”
let item_4 = "Yolochka";
//  Вывести в консоль item_4.
console.log(item_4);
//  Вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4);
//  Вывести в консоль умножение item_3 и item_4.
console.log(item_4.repeat(item_3));

//  Создать переменную “item_5”
//  Присвоить переменной item_5 переменную item_3
let item_5 = item_3;
//  Создать переменную item_6.
//  Присвоить переменной item_6 значение 15
let item_6 = 15;
//  Создать переменную item_6_type
//  Присвоить переменной item_6_type тип переменной item_6
let item_6_type = item_6;
//  Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type
console.log("item_6 == ", typeof(item_6),",","item_6_type == ", typeof(item_6_type));

//  Создать переменную item_7 и в ней преобразовать item_6 в String.
let item_7 = item_6.toString();
//  Создать переменную item_7_type
//  Присвоить переменной item_7_type тип переменной item_7
let item_7_type = item_7;
//  Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type
console.log("item_7 == ", typeof(item_7),",","item_7_type == ", typeof(item_7_type));

//  Создать переменную “age_1” и присвоить ей значение 10
let age_1 = 10;
//  Создать переменную “age_2” и присвоить ей значение 18
let age_2 = 18;
//  Создать переменную “age_3” и присвоить ей значение 60
let age_3 = 60;

//  Создать if в котором будете проверять значение переменной age_1
// Если age_1 < age_2, вывести в консоль 
// “You don’t have access cause your age is ” + age_1 + “ It’s less then ” + age_2
if (age_1 < age_2) {
    console.log("You don't have access cause your age is "+ age_1 + ". It's less then "+ age_2);
} 
//  Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !");
} 
//  Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
} 
else {
// Иначе выводите “Technical work”.
    console.log("Technical work");
}