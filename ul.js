// alert('Hello World');

/*let answer = confirm('Are you here?');
console.log(answer);

let answ = prompt('Are you more than 18 year\'s old?', 'Yes'); //второе - ответ по умолчанию
console.log(answ);
console.log(typeof(answ));
console.log(typeof(answer));
*/
//чтобы превратить введенную строку в число можно использовать +prompt
//example 
let answ = +prompt('Are you more than 18 year\'s old?'); 
console.log(answ);
console.log(typeof(answ));

let incr = 10, 
    decr = 5;

incr++;
decr--;

console.log(incr);
console.log(decr);

//incr = 10 console.log(++incr) - возвращает 11, а console.log(incr++) - 10. Читает слева направо.

/*  = присваивание
    == проверка на равенство
    === проверка на равенство и по типам данных
*/
// && - 'и' все условия правдивы
// || - 'или' хотя-бы одно из. 