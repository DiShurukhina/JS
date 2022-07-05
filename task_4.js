const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]
  
  /* 
  Написать функцию: 
  
  Функция строит древовидный список компании.
  При ее вызове в консоль должен вывести список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
  
  Пример:
  
  Компания (10)
  -- Отдел тестирования (7)
  ---- Тестирование Web (5)
  ---- Тестирование Mobile (0)
  -- Отдел маркетинга (30)
  -- Администрация (25)
  ---- Бухгалтерия (10)
  ---- Менеджмент (15)
  ------ Подраздел менеджмента 1 (5)
  ------ Подраздел менеджмента 2 (10)
  ---- HR (1)
  */


function showAllCompanies(companies, indentCount) {
    if (typeof indentCount === 'undefined') {
        indentCount = -1;
    }
    indentCount++;
    for (comp of companies) {
        console.log(`${'--'.repeat(indentCount)} ${comp.name} (${comp.users_count})`);
        if(typeof comp.children !== 'undefined') {
            showAllCompanies(comp.children, indentCount);
        }  
    }
}

showAllCompanies(company);