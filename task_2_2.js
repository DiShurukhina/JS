// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
const fs = require("fs");

function uniqueUser(users) {
    let names = new Set();
    return users.filter(user => names.has(user.name) ? false : names.add(user.name));
}

let userInfo2 = JSON.parse(fs.readFileSync("task2.json", "utf8"));

userInfo2 = uniqueUser(userInfo2);

//Создаю новый файл с массивом уникальных значений
fs.writeFileSync("task2_upd.json", JSON.stringify(userInfo2));