'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    // Ваше решение
    if (typeof a !== "number" || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError();
    }
    return Math.trunc(a + b)
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    // Ваше решение
    if (typeof year !== 'number' || isNaN(year)) {
        throw new TypeError();
    }
    if (year < 0) {
        throw new RangeError();
    }
    if (year % 100 === 0) {
        return Math.floor(year / 100);
    }
    return Math.floor(year / 100) + 1
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    // Ваше решение
    if (typeof hexColor !== 'string') {
        throw new TypeError();
    }
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    if (!regex.test(hexColor)) {
        throw new RangeError()
    }
    const result = /^#?([a-f\d]{2}|[a-f\d]{1})([a-f\d]{2}|[a-f\d]{1})([a-f\d]{2}|[a-f\d]{1})$/i.exec(hexColor).splice(1).map(el => {
        return parseInt(el.length === 1 ? `${el}${el}` : el, 16)
    });
    return `(${result.join(', ')})`
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    // Ваше решение
    if (typeof n !== 'number' || isNaN(n)) {
        throw new TypeError();
    }
    if (n <= 0 || !Number.isInteger(n)) {
        throw new RangeError();
    }

    function fib(x, cache = {}) {
        if (!cache[x]) {
            cache[x] = x < 2 ? x : fib(x - 1, cache) + fib(x - 2, cache);
        }
        return cache[x]
    }

    return fib(n);
}


/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    // Ваше решение
    if (
        matrix instanceof Array &&
        matrix.length > 0 &&
        matrix.every(
            el =>
                el instanceof Array &&
                el.length > 0 &&
                el.every(it => !(it instanceof Array))
        )
    ) {
        const N = matrix.length;
        const M = matrix[0].length;
        if (matrix.every(el => el.length === M)) {
            let newMatrix = Array.from({length: M}, () => []);
            for (let i = 0; i < M; i++) {
                for (let j = 0; j < N; j++) {
                    newMatrix[i][j] = matrix[j][i];
                }
            }
            return newMatrix;
        } else {
            throw new TypeError();
        }
    } else {
        throw new TypeError();
    }
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    // Ваше решение
    if (typeof n !== 'number' || typeof targetNs !== 'number' || isNaN(n) || isNaN(targetNs)) {
        throw new TypeError();
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError();
    }
    return n.toString(targetNs)
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    // Ваше решение
    if (typeof phoneNumber !== 'string') {
        throw new TypeError();
    }
    let regex = new RegExp(/^8-800-([0-9]{3})-([0-9]{2})-([0-9]{2})$/);
    return regex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    // Ваше решение
    if (typeof text !== 'string') {
        throw new TypeError();
    }
    const regex = /(:-\))|(\(-:)|(\(-:-\))/g;
    const matches = text.match(regex);
    if (!matches) return 0;
    return matches.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    // Ваше решение
    let transpField = matrixProblem(field).map(el => el.join(''));
    let lineStr = field.map(el => el.join(''));

    const leftDiagonal = lineStr.map((el, idx) => el[idx]).join('');
    const rightDiagonal = lineStr.reverse().map((el, idx) => el[idx]).join('');

    const checkX = lineStr.includes('xxx') ||
        transpField.includes('xxx') ||
        leftDiagonal.includes('xxx') ||
        rightDiagonal.includes('xxx');

    const checkO = lineStr.includes('ooo') ||
        transpField.includes('ooo') ||
        leftDiagonal.includes('ooo') ||
        rightDiagonal.includes('ooo');

    if (checkX) return 'x';
    if (checkO) return 'o';
    if (!checkX && !checkO) return 'draw';
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
/**
 * не уверен: ,
 */


/**
 * abProblem: 1,2,3,4,5,6,7,
 * centuryByYearProblem: 8,9,10,11,12,13,14,15
 * colorsProblem: 15, 16,17, 18, 19, 20, 21,
 * matrixProblem: 32, 33, 34,35,36,37,38
 * numberSystemProblem: 39, 40,41,42,43,44,45,46,47,48,49,50,
 * phoneProblem: 51,52,53,54,55,56,57,58,59,
 * smilesProblem: 60, 61,62,63,64,65,66,67
 * ticTacToeProblem: 68, 69, 70, 71, 72, 73, 74,
 */
