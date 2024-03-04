/**
 * A. Конфигурируемый калькулятор
 * Вам требуется написать калькулятор который работает на конфигах. Каждый конфиг состоит из двух полей. В одном поле (vars) мы получаем переменные (некоторые из них нам предстоит вычислить). Другое поле (calculations) содержит формулы для расчётов.
 *
 * Шаблон отправки решения:
 *
 * module.exports = function solution() {
 *   // Ваше решение...
 * }
 * Формат ввода
 * {
 *     vars: [
 *         {
 *             id: 'a',
 *             formula: 'calcA'
 *         },
 *         {
 *             id: 'b',
 *             formula: 'calcB'
 *         },
 *         {
 *             id: 'c',
 *             formula: 'calcC'
 *         },
 *         {
 *             id: 'd',
 *             value: 5
 *         },
 *         {
 *             id: 'f',
 *             value: 5
 *         },
 *     ],
 *     calculations: [
 *         {
 *             id: 'calcA',
 *             formula: '$b + $c'
 *         },
 *         {
 *             id: 'calcB',
 *             formula: '$d * ( $f + 5 )'
 *         },
 *         {
 *             id: 'calcC',
 *             formula: '$f + $b'
 *         },
 *     ]
 * }
 * Формат вывода
 * { a: 105, b: 50, c: 55, f: 5, d: 5 }
 * Примечания
 * не может быть переменной где есть оба поля formula и поле value
 * в поле formula содержит идентификатор формулы и это всегда строка, но не гарантируется, что существует формула с таким id
 * если посчитать все значения по данному конфигу невозможно, то вместо объекта с результатом требуется вернуть строку "impossible"
 * доступные операции +, -, *, / и скобки (, ) любой вложенности
 * скобки расставлены всегда правильно
 * все сущности формулы разделены пробелом
 * важно соблюдать порядок действий
 * гарантируется, что если в конфиге есть все необходимые переменные для формулы, то расчёт можно произвести
 * @param vars
 * @param calculations
 * @returns {*[]}
 */

function main({vars, calculations}) {

    let rs = [];

    const calculateFormula = (id, formula, variables) => {
        let newFormula = formula;
        if (!formula.includes('$')) {
            if (!rs.find(it => it.id === id)) {
                rs.push({
                    id: id,
                    value: eval(formula)
                });
            }
            return eval(formula);
        } else {
            const args = formula.split(' ').filter(it => it.includes('$'));
            args.map((arg, idx) => {
                const fnd = variables.find((it, idx) => '$' + it.id === arg);
                if (!!fnd.value) {
                    calculateFormula(id, newFormula.replaceAll(arg, fnd.value), variables);
                }
                if (!!fnd.formula) {
                    const rs = calculateFormula(id, calculations.find(it => it.id === fnd.formula).formula, variables);
                    calculateFormula(id, newFormula.replaceAll(arg, rs), variables);
                }
                if (!fnd) return 'impossible';
            });
        }
    }

    vars.forEach((it, idx) => {
        if (!!it.formula) {
            const v = calculateFormula(it.id, calculations.find(calc => calc.id === it.formula).formula, vars.concat(rs));
            console.log(v)
        }
        if (!!it.value) {
            rs.push({id: it.id, value: it.value});
        }
    });
    console.log(rs);
    return rs;
}

main({
    vars: [
        {
            id: 'a',
            formula: 'calcA'
        },
        {
            id: 'b',
            formula: 'calcB'
        },
        {
            id: 'c',
            formula: 'calcC'
        },
        {
            id: 'd',
            value: 5
        },
        {
            id: 'f',
            value: 5
        },
    ],
    calculations: [
        {
            id: 'calcA',
            formula: '$b + $c'
        },
        {
            id: 'calcB',
            formula: '$d * ( $f + 5 )'
        },
        {
            id: 'calcC',
            formula: '$f + $b'
        },
    ]
})
