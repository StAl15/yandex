// А. Яндекс.Метрика
// Перед вами Василий - очень деловой человек, который просто не может представить свою жизнь без подсчета практически всего, что угодно: машин, проезжающих за окном офиса, денег, которые потратил на такси с утра, количество плиток на потолке... Но Василию потребовалось направить свою энергию в нужное русло - посчитать на сервисе по просмотру картинок котиков, к развитию которого он приложил немало усилий, количество использований функции добавления лайков уникальными пользователями, ведь такой подсчет не просто поможет скоротать время с интересом, а и способен принести ощутимую пользу: понять, насколько часто пользователям нравятся картинки с котиками! Также Василий подумал, что неплохо было бы и добавление комментариев считать, и сохранение картинок в избранное... Но Василий очень занят пересчитыванием кофейных зерен во время обеденного перерыва (а как без этого), потому ему очень нужна ваша помощь в решении задачи!
//
//     Требуется написать функцию-обертку, обеспечивающую подсчет уникальных пользователей в день, вызвавших функцию func, принимающую произвольное количество аргументов args . На вход обертке приходит функция, которую необходимо вызвать.
//
//     Возвращаемым значением будет также функция, принимающая следующие аргументы:
//
//     credentials - объект с полями login: string | null | undefined; password: string | null | undefined, date: Date, дата последнего логина.
//     args - аргументы для вызова функции func.
//     Результатом выполнения данной функции будет массив объектов { date: 'YYYY-MM-DD', users: number }, которые содержат в себе информацию о количестве уникальных пользователей за день, например [{ date: ’2011-01-26’, users: 3}].
//
// Уникальными считаются пользователи, у которых различаются логин или пароль. Если логин или пароль не являются строкой или пусты, то требуется вернуть текущее сохраненное количество уникальных пользователей, притом функция func в случае неполных данных вызываться не должна.
//
//     Сигнатура функции-обертки:
//
// /**
//  * @typedef {Object} Answer
//  * @property {Date} date - дата, для которой подсчитано количество уникальных пользователей
//  * @property {number} users - количество уникальных пользователей
//  *
//  *
//  * @typedef {Object} Credentials
//  * @property {string | null | undefined} login - логин пользователя
//  * @property {string | null | undefined} password - пароль пользователя
//  * @property {Date} date - дата последнего логина
//  *
//  * @param {Function} func  - произвольная функция, вызываемая для пользователей с присутствующим логином и паролем
//  * @return {(credentials: Credentials, ...args) => Answer[]} - результат подсчета количества уникальных пользователей для каждого дня
//  */
// module.export = (func) => {
// ...
// }
// Формат ввода
// Пример 1:
//
// // Тестовые данные
// const wrappedFunc = metrikaWrapper(() => (console.log('called')));
//
// console.log(wrappedFunc({ login: 'a', password: 'a', date: new Date('2023-06-28')}));
//
// console.log(wrappedFunc({ login: NaN, password: 'a', date: new Date('2023-06-28')}));
//
// console.log(wrappedFunc({ login: 'c', date: new Date('2023-06-28')}));
// Пример 2:
//
// // Тестовые данные
// const wrappedFunc = metrikaWrapper(() => (console.log('called')));
//
// console.log(wrappedFunc({ login: 'a', password: 'a', date: new Date('2023-06-28')}));
//
// console.log(wrappedFunc({ login: 'b', password: 'a', date: new Date('2023-06-28')}));
//
// console.log(wrappedFunc({ login: 'c', password: 'c', date: new Date('2023-06-28')}));
// Формат вывода
// Пример 1:
//
// // Результат
// called
//     [ { date: '2023-06-28', users: 1 } ]
//     [ { date: '2023-06-28', users: 1 } ]
//     [ { date: '2023-06-28', users: 1 } ]
// Пример 2:
//
// // Результат
// called
// called
//     [ { date: '2023-06-28', users: 1 } ]
// called
//     [ { date: '2023-06-28', users: 2 } ]
// called
//     [ { date: '2023-06-28', users: 3 } ]

function fn(cb) {
    let res = [];
    //date: string; data: T[]; users: number;
    return (function (credentials, args) {
        if (typeof credentials.login === "string" && typeof credentials.password === "string" && credentials.date instanceof Date) {

            const convertedDate = credentials.date.toISOString().split('T')[0];
            const item = credentials.login + credentials.password;

            if (res.find(it => it.data.includes(item))) {
                res = res.map(it => it.data.includes(item) ? ({
                        ...it,
                        users: it.data.length
                    }) : it
                )
            } else {
                if (res.find(it => it.date === convertedDate)) {
                    res = res.map(it => it.date === convertedDate ? {
                        ...it,
                        data: it.data.concat(item),
                        users: it.users + 1
                    } : it)
                } else {
                    res.push({date: convertedDate, data: [item], users: 1})
                }
            }
            cb();
        }
        let copyRes = res.map(it => ({
            date: it.date,
            users: it.users
        }));
        return copyRes;
    })
}

module.exports = fn;

const wrappedFunc_ = fn(() => (console.log('called')));

console.log(wrappedFunc_({login: 'a', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc_({login: NaN, password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc_({login: 'c', date: new Date('2023-06-28')}));

console.log("\n\n\n ------- SECOND TEST ------- \n\n\n");

const wrappedFunc = fn(() => (console.log('called')));

console.log(wrappedFunc({login: 'a', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc({login: 'b', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc({login: 'c', password: 'c', date: new Date('2023-06-28')}));

console.log("\n\n\n ------- THIRD TEST ------- \n\n\n");


const wrappedFunc2 = fn(() => (console.log('called')));

console.log(wrappedFunc2({login: 'a', password: 'a', date: new Date('2023-07-28')}));

console.log(wrappedFunc2({login: 'c', password: 'a', date: new Date('2023-07-28')}));

console.log(wrappedFunc2({login: 'a', password: 'a', date: new Date('2023-07-28')}));

console.log(wrappedFunc2({login: 'e', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc2({login: 'o', password: 'a', date: new Date('2023-07-28')}));

console.log(wrappedFunc2({login: 'p', date: new Date('2023-06-28')}));

console.log(wrappedFunc2({date: new Date('2023-07-28')}));

console.log(wrappedFunc2({login: 'e', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc2({login: 'e1', password: 'a', date: new Date('2023-06-28')}));
console.log(wrappedFunc2({}));








