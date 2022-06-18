//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (var i = 1; i <=10; i++){
    console.log(Math.pow(2, i))
}



//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const expo = function (degree) {
    for (var i = 1; i <= degree; i++){
        console.log(Math.pow(2, i))
    }
}

 expo (7)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

for (var i = 0; i <=5; i++){
    console.log(':)'.repeat(i))
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    stroka = stroka.toString()
    for (var i = 0; i <=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}

printSmile("ololo", 10);
printSmile(10, 10);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function inputWords(inputWord) {
    let vowel_count = 0;
    let consonant_count = 0;
    let vowel = new Set(['а','о','и','е','ё','э','ы','у','ю','я','a','e','y','u','i','o']);
    let consonant = new Set(['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','ц','к','н','г','ш','щ','з','х','ф','в','п','р','л','д','ж','ч','с','м','т','б','й']);
    inputWord = ('' + inputWord).toLowerCase()
    for(var i = 0; i < inputWord.length ; i++)
    {
      if (vowel.has(inputWord[i]))
      {
        vowel_count++;
      } else if (consonant.has(inputWord[i])){
        consonant_count++
      }
    }
    console.log("В слове ", inputWord, vowel_count, "гласных и ", consonant_count, "согласных");
}
inputWords ('pseudopseudohypoparathyroidism')
inputWords ('тетрагидроканнабинол')


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
//Проверки: 'abba', 'Abba'

function isPalindrom(pal){
    pal = ('' + pal).toLowerCase();
    pal = pal.replace(/[^a-zа-яё0-9]/gi, '');
    let result = pal.split('').reverse().join('') == pal;
    console.log ('this is ' + (result ? '' : 'not ') + 'palindrome')
}

isPalindrom('Мастер жрет сам');
isPalindrom('abba2');
