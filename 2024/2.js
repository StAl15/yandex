/**
 * B. Давай посчитаем
 * На сайте сломался калькулятор, много людей очень переживает по этому поводу, так как не получается решить математические задачи. Видимо другой программист удалил файлик с исходным кодом...
 *
 * Обычно у нас вызывалась функция calculator, которая создавала объект калькулятора с такими методами:
 *
 * add — сложение
 * subtract — вычитание
 * multiply — умножение
 * divide — деление
 * magic — происходит какая-то магия :)
 * getValue — возвращает значение
 * Нужно заново реализовать эту функцию.
 *
 * Шаблон
 * module.exports = function calculator() {
 *   // Ваше решение...
 * }
 * Формат ввода
 * const calc = calculator() // Начинаем с 0
 *
 * calc.add(10) // Добавляем 10
 * calc.multiply(2) // Умножаем на 2
 * calc.subtract(5) // Вычитаем 5
 * calc.divide(3) // Делим на 3
 *
 * calc.getValue() // Текущий результат: 5
 *
 * calc.magic(calc.add)(2)(3)(4) // Добавляем к результату 2, потом 3, потом 4
 *
 * console.log(calc.getValue());   // Вывод финального результата: 14
 * Примечания
 * Если мы делим на 0, ожидаем что метод divide вернёт нам ошибку new Error('Cannot divide by zero.').
 * Для методов add, subtract, multiply и divide в аргументах передаётся одно значение (число) и они не должны возвращать что-либо.
 * Для метода magic передается изначальная функция, а возвращать она должна функцию от одного аргумента, которая меняет внутреннее состояние и снова возвращает функцию от одного аргумента.
 * Если в функцию magic передать divide и когда-либо поделить на 0, то ошибка должна игнорироваться.
 * @param n_
 * @returns {any}
 */
module.exports = function calculator(n_ = null) {
    let initialValue = n_ ?? 0;
    const calc = {
        add(n) {
            initialValue += n;
        },
        multiply(n) {
            initialValue *= n;
        },
        subtract(n) {
            initialValue -= n;
        },
        divide(n) {
            if (n === 0) {
                throw new Error('Cannot divide by zero.');
            }
            initialValue /= n;
        },
        getValue() {
            return initialValue;
        },
        magic(func) {
            if (func === calc.divide) {
                return (num) => {
                    try {
                        func(num);
                    } catch {} // Ignoring divide by zero error
                    return calc.magic(func);
                };
            } else {
                return (num) => {
                    func(num);
                    return calc.magic(func);
                };
            }
        }
    };
    return calc;
}


const calc = calculator() // Начинаем с 0

calc.add(10) // Добавляем 10
calc.multiply(2) // Умножаем на 2
calc.subtract(5) // Вычитаем 5
calc.divide(3) // Делим на 3

calc.getValue() // Текущий результат: 5

calc.magic(calc.add)(2)(3)(4) // Добавляем к результату 2, потом 3, потом 4

console.log(calc.getValue());   // Вывод финального результата: 14

