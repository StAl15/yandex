/**
 C. Сборщик
 Всем известно, насколько трудоемко построить дерево зависимостей для пакетов приложения: повсюду возникают конфликты версий, памяти постоянно не хватает, так ещё и сетевое соединение может быть нестабильным. Но вот, вы попали в почти идеальный мир: где первых двух проблем не существует, как и других программ для построения деревьев зависимостей. Все что у вас есть, это:

 dependencies — корневой объект со списком зависимостей (у каждой из которых могут быть свои подзависимости)
 fetcher — асинхронная функция, которая принимает на вход имя пакета, для которого хотим получить список зависимостей,
 Результат вызова — объект со списком зависимостей
 Функция время от времени может выдавать ошибки, чтобы их избежать, 100% гарантия ответа достигается при троекратном перезапросе данных
 Ваша задача реализовать функцию buildDependencyTree(dependencies, fetcher), которая будет по заданным корневым зависимостям строить полное дерево.

 Шаблон кода

 async function buildDependencyTree(dependencies, fetcher) {
    // Ваше решение...
}

 module.exports = buildDependencyTree
 Формат ввода
 /**
 * Пример
 *
 * Функция fetcher задана извне. В примере будем считать, что все запросы завершились успешно.
 * Однако не стоит забывать, что для гарантии безошибочного ответа запрос придется повторить до 3 раз.
 *
 * Объект с корневыми зависимостями, на основании которого будет строиться дерево:
 *
 * const dependencies = {
 *   "core-js": {},
 *   "har": {}
 * }
 *
 * Пусть fetcher('core-js') вернет { package: 'core-js', dependencies: ["npm", "yup"] }
 * Для "npm", "yup", "har" список подзависимостей будет пустым:
 *    fetcher('npm') вернет { package: 'npm', dependencies: [] }

 Формат вывода
 * Тогда после применения функции buildDependencyTree(dependencies, fetcher)
 * в dependencies должен содержаться объект вида:
 *
 * {
 *    "core-js": {
 *      "npm": {},
 *      "yup": {},
 *    },
 *    "har": {}
 *  }
 Примечания
 Циклические зависимости здесь исключаются (т.е. не может быть зависимости вида: { "react": ["react", "core-js"] } или { "react": ["core-js"], "core-js": ["react"] }).
 */
async function buildDependencyTree(dependencies, fetcher) {
    let result = {};
    // Ваше решение...

    for (const dependency of dependencies) {
        for (let i = 0; i < 3; i++) {
            let rs = new Promise((resolve, reject) => {
                resolve(fetcher(dependency))
            })
            if (!result[dependency]) {
                result[dependency] = {};
            }
            if (rs.dependencies.length === 0) {
                result[dependency] = {};
            } else {
                const rfdn = buildDependencyTree(rs.dependencies, fetcher);
                result[dependency] = {...result[dependency], ...rfdn};
            }
        }
    }
    const promises = Object.keys(dependencies).map((dep) => buildDependencyTree(dep, fetcher));
    return await Promise.all(promises);
}

module.exports = buildDependencyTree
