let title = "Lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5500;
let rollback = 25;
let fullPrice = 850000;
let adaptive = true;


console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));