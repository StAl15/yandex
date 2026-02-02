/**
 * Вам дано четырехзначное число без ведущих нулей. Вам нужно переставить в нем цифры таким образом, чтобы получившееся число было минимально возможным и не содержало ведущих нулей.

Входные данные
В первой строке записано единственное четырехзначное число 
x
x (
1000
≤
x
≤
9999
1000≤x≤9999).

Выходные данные
Выведите единственное число — минимальное число без ведущих нулей, полученное перестановкой цифр из исходного числа.


 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = 0;


const taskFn = (input) => {
    const zeroCount = input.split('0').length;
    const nums = input.split('').filter(el => el.length > 0 && +el !== 0);
    let newNums = nums.sort((a,b) => a > b ? 1 : -1);
    newNums.splice(1, 0, ...Array.from({length: zeroCount - 1}, (v, i) => 0));
    return newNums.join('');
}

rl.on("line", (input) => {
    if (lines === 0) {
        console.log(taskFn(input));
        rl.close();
    }
});

