// B. Асинхронные котики
// Разработчик Петя очень любит котиков. Он сохранил себе несколько ссылок на котиков и хочет регулярно проверять их актуальность через сетевые запросы. Для этой задачи Петя нашёл API-сервис. У этого API-сервиса применяется rate limit для защиты от DDoS-атак. Опытным путём Петя выяснил, что можно отправлять до 10 запросов одновременно, после чего требуется ждать 100ms. Нужно помочь Пете написать функцию, которая будет запрашивать проверять актуальность ссылок. Функция принимает на вход массив адресов, fetch-функцию и максимальное количество повторных запросов, а возвращает Promise с массивом успешно запрошенных ссылок котиков.
//
//     Файл с ответом должен экспортировать функцию, которая принимает на вход объект с следующими ключами:
//
//     urls — список адресов, которые требуется запросить ( 0 ≤ N ≤ 50).
// fetcher — функция, принимающая на вход текущий адрес и возвращающая успешный или неуспешный промис. Реализовывать её не нужно, она будет предоставлена
// maximumRetryCount — максимальное число попыток, вызова функции fetcher при возникновении ошибки
// Шаблон
// /**
//  * @param {{
//  *  urls: [string],
//  *  fetcher: (url: string) => Promise,
//  *  maximumRetryCount: number
//  * }}
//  * @returns {Promise<[string]>}
//  */
// module.exports = function solution({ urls, fetcher, maximumRetryCount }) {
//     // ваш код
// }
// Формат ввода
// Пример 1
// // Возвращает пустой массив
// module.exports = {
//     urls: [],
//     fetcher: (url) => Promise.resolve(url),
//     maximumRetryCount: 0
// }
// Пример 2
// // Вызывает fetcher и возвращает массив urls в правильном порядке
// module.exports = {
//     urls: ["https://test.com/1", "https://test.com/2", "https://test.com/3"],
//     fetcher: (url) => Promise.resolve(url),
//     maximumRetryCount: 1
// }
// Пример 3
// // Поочерёдно выполняем запросы. Пробуем 3 раза перезапросить недоступный адрес.
// // Когда заканчивается количество попыток — возвращаем успешно запрошенные адреса
// const fetcher = () => (url) => {
//     // Иммитируем недоступность адреса
//     return url.includes("2") ? Promise.reject() : Promise.resolve(url)
// }
//
// module.exports = {
//     urls: ["https://test.com/1", "https://test.com/2", "https://test.com/3"],
//     fetcher: fetcher(),
//     maximumRetryCount: 3
// }
// Формат вывода
// Пример 1
//     []
// Пример 2
//     ["https://test.com/1", "https://test.com/2", "https://test.com/3"]
// Пример 3
//     ["https://test.com/1", "https://test.com/3"]
// Примечания
// Нельзя использовать следующие функции: Promise.all, Promise.allSettled, Promise.any, Promise.race
// Так как сетевые запросы дорогие и выполняются долго, то требуется написать решение, которое делает минимальное количество вызовов функции fetcher
// Список элементов в результирующем массиве должен идти в том же порядке, что и в оригинальном массиве urls

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let pending = promises.length;

        promises.forEach((promise, index) => {
            promise.then((result) => {
                results[index] = result;
                pending--;
                if (pending === 0) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

async function fn({urls, fetcher, maximumRetryCount}) {
    if (urls.length > 0) {
        let res = urls.map((it) => myfetch({url: it, fetcher: fetcher, maxCount: maximumRetryCount}))
        const r = myPromiseAll(res);
        try {
            const list = await r;
            console.log(list.filter(it => it != null));
        } catch (e) {
            console.log(e)
        }
    } else {
        return [];
    }
}

async function myfetch({url, fetcher, count = 0, maxCount}) {
    let rs = false;
    if (count <= maxCount) {
        if (!rs) {
            try {
                await fetcher(url)
                    .then(function onResolve(result) {
                        rs = true;
                        return url;
                    }).catch(async (error) => {
                        await myfetch({url: url, fetcher: fetcher, count: count + 1, maxCount: maxCount})
                    })
            } catch (e) {
                return null;
            }
        }
    }
    return rs ? url : null;
}

module.exports = fn

const fetcher = () => (url) => {
    // Иммитируем недоступность адреса
    return url.includes("2") ? Promise.reject() : Promise.resolve(url)
}

let r = fn({
    urls: ["https://test.com/1", "https://test.com/2", "https://test.com/3"],
    fetcher: fetcher(),
    maximumRetryCount: 3
});

