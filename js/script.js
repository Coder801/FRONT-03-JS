console.clear()
// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!
console.info('hello world');
// ## 1 Обьявление примитивных переменные
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение
// * Проверьте валидность кода через парсер
var num = 5;
var str = 'string';
var bool = true;
var nul = null;
var undef = undefined;
// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 7, 8, 9
// * Найдите периметр треугольника / P1=a+b+c
// * Найдите полупериметр треугольника / P2=(a+b+c)/2
// * Найдите радиус вписанной окружности в треугольник R1=Math.sqrt((p-a)*(p-b)*(p-c))/2
// * Найдите радиус вписанной окружности в прямоугольный треугольник / R2=(a+b-c)/2
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18
var a = 7;
var b = 8;
var c = 9;
var p1 = (a+b+c);
console.info("Периметр треугольника =", p1);
var p2 = (a+b+c)/2;
console.info("Полупериметр треугольника =",p2);
var some = ((p2-a)*(p2-b)*(p2-c))/p2;
var r1 = Math.sqrt(some);
console.info("Радиус вписанной окружности в треугольник =",r1);
var r2 = (a+b-c)/2;
console.info("Радиус вписанной окружности в прямоугольный треугольник =",r2);
// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива фамилий пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала б значение правой верхней границы html элемента
var mail
var date
var surname_users_array
var def
var right_up_border
// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html
var user = {name: "Вася"};
user.name = "Петя";
console.log(user.name);
// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки
console.info('6' - 3); // 3, потому что «6» преобразуется в 6
console.info('20' + 10); // 2010, потому что 10 преобразуется в «10»
console.info('10' + - 2); // 10-2 ""
console.info("4px" - 2); // NaN, потому что "4px" конвертирует в NaN
console.info(15 / 0); // Infinity, потому что на "0" нельзя делить
console.info(4 + 5 + "px"); // 9px ""
console.info(+""); // 0, потому что "" конвертирует в ноль
console.info(NaN === NaN); // false, потому что Nan не идентично "NaN"
console.info(null == undefined); // true, потому что false = false
