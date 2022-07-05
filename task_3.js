const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]


//   Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)


for (company of enterprises) {
    let empTotal = 0;
    let depInfo = "";
    for (dep of company.departments) {
        empTotal += dep.employees_count;
        depInfo += `- ${dep.name} (${dep.employees_count == 0 ? "нет" : dep.employees_count} сотрудников)\n`;
    }
    console.log(`${company.name} (${empTotal == 0 ? "нет" : empTotal} сотрудников)`);
    console.log(depInfo);
}


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getCompanyName (depatrment) {
  for (ent of enterprises) {
    for (dept of ent.departments) {
      if (dept.id == depatrment || dept.name == depatrment) return ent.name;
    }
  }
  return "Nothing found"
}

console.log(getCompanyName (10));
console.log(getCompanyName ("Отдел маркетинга"));


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// функция поиска максимального ID 
// используется в задаче 3.3 и 3.4, для корректного выполнения лучше не комментировать эту функцию.
function findMaxID() {
  let maxID = 0;
  for (ent of enterprises) {
    if (ent.id > maxID) {
      lastID = ent.id;
    }
    for (dept of ent.departments) {
      if (dept.id > maxID) {
        maxID = dept.id;
      }
    }
  }
  return maxID;
}


function addEnterprise(companyName) {
  let newID = findMaxID() + 1;
  let newEnt = {
    id: newID,
    name: companyName,
    departments: []
  }
  enterprises.push(newEnt);
}

addEnterprise("Предприятие 4");
console.log(JSON.stringify(enterprises, 0, 2));


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(entID, depatrmentName) {
  for (ent of enterprises) {
    if (ent.id == entID) {
      let newDepID = findMaxID() + 1;
      let newDep = {
        id: newDepID,
        name: depatrmentName,
        employees_count: 0
      }
      ent.departments.push(newDep);
      return;
    }
  }
  console.log("Предприятие с таким ID не найдено");
}


addDepartment(9, "Отдел СУБД");
console.log(JSON.stringify(enterprises, 0, 2));

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(entID, newEntName) {
  for (ent of enterprises) {
    if (ent.id == entID) {
      ent.name = newEntName;
      return;
    }
  }
  console.log("Предприятие с таким ID не найдено");
}

editEnterprise(1, "New enterprise");
console.log(JSON.stringify(enterprises, 0, 2));


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(depID, newDepName) {
  for (ent of enterprises) {
    for (dept of ent.departments) {
      if (dept.id == depID) {
        dept.name = newDepName
        return;
      }
    }
  }
  console.log("Отдел с таким ID не найден");
}
editDepartment(8, "New department");
//editDepartment(18, "New department"); //тестовый вызов для проверки несуществующего отдела
console.log(JSON.stringify(enterprises, 0, 2));

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(entID) {
  for (i = 0; i < enterprises.length; i++) {
    if (enterprises[i].id == entID) {
      enterprises.splice(i, 1);
      return;
    }
  }
  console.log("Предприятие с таким ID не найдено");
}

deleteEnterprise(5);
console.log(JSON.stringify(enterprises, 0, 2));


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDepartment(depID) {
  for (ent of enterprises) {
    for (i = 0; i < ent.departments.length; i++) {
      if (ent.departments[i].id == depID) {
        if (ent.departments[i].employees_count === 0) {
          ent.departments.splice(i, 1);
        } else {
          console.log("Нельзя удалить отдел, т.к. в нем есть сотрудники");
        }
        return;
      }
    }
  }
  console.log("Отдел с таким ID не найден");
}

deleteDepartment(10);
console.log(JSON.stringify(enterprises, 0, 2));

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(oldDepID, newDepID) {
  if (oldDepID == newDepID) {
    console.log("Номера отделов должны отличаться");
  }
  for (ent of enterprises) {
    let oldDep;
    let newDep;
    for (dep of ent.departments) {
      if (dep.id == oldDepID) {
        oldDep = dep;
      }
      if (dep.id == newDepID) {
        newDep = dep;
      }
    }
    if (typeof oldDep !== 'undefined' && typeof newDep !== 'undefined') {
      newDep.employees_count += oldDep.employees_count;
      oldDep.employees_count = 0;
      return;
    }
  }
  console.log("Отделы не найдены или находятся в разных предприятиях");
}

moveEmployees(4, 4);
console.log(JSON.stringify(enterprises, 0, 2));