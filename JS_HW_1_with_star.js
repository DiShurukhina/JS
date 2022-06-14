// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function (age) {
    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less then " + age_2);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge(17);
checkAge(18);
checkAge(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function (age) {
    let age_2 = 18;
    let age_3 = 60;
    if (typeof age !== 'number') {
        console.error("Invalid variable type");
        return;
    }
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less then " + age_2);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge2("test");
checkAge2(18);
checkAge2(61);


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const checkAge3 = function (age) {
    let age_2 = 18;
    let age_3 = 60;
    if (typeof age !== 'number' && isNaN(age = Number(age))) {
        console.error("Invalid variable type");
        return;
    }
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less then " + age_2);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

// тесты для проверки
checkAge3("12");
checkAge3("test18");
checkAge3(18);
checkAge3(61);
checkAge3("Test")

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let inputAge = prompt("Enter your age");
const checkAge4 = function (age) {
    let age_2 = 18;
    let age_3 = 60;
    if (typeof inputAge !== 'number' && isNaN(inputAge = Number(inputAge))) {
        alert("Invalid variable type");
        return;
    }
    if (inputAge < age_2) {
        alert("You don't have access cause your age is " + inputAge + ". It's less then " + age_2);
    } else if (inputAge >= age_2 && inputAge < age_3) {
        alert("Welcome !");
    } else if (inputAge > age_3) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work");
    }
}

checkAge4(inputAge);