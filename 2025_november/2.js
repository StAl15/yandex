/**
 * Вам дан массив 
a
1
,
a
2
,
…
,
a
n
a 
1
​
 ,a 
2
​
 ,…,a 
n
​
 . На нём играют два игрока. В свой ход игрок обязан выбрать какой-нибудь индекс 
i
i (
1
≤
i
≤
n
1≤i≤n) и прибавить 
1
1 к элементу 
a
i
a 
i
​
 . Если после хода существует перестановка 
p
p, удовлетворяющая условию 
a
i
≤
p
i
a 
i
​
 ≤p 
i
​
 , то ход переходит другому игроку. Иначе игра завершается, и текущий игрок проигрывает.

Нужно сообщить, какой из игроков победит при оптимальной игре на данном массиве.

Напомним, что массив 
p
1
,
p
2
,
…
,
p
n
p 
1
​
 ,p 
2
​
 ,…,p 
n
​
  называется перестановкой, если каждое число от 
1
1 до 
n
n в массиве 
p
p встречается ровно один раз.

Входные данные
Данная задача состоит из нескольких наборов входных данных. В первой строке задано единственное число 
t
t (
1
≤
t
≤
2
⋅
1
0
4
1≤t≤2⋅10 
4
 ) — количество наборов входных данных. Далее идёт их описание.

В первой строке каждого набора входных данных записано единственное число 
n
n (
1
≤
n
≤
2
⋅
1
0
5
1≤n≤2⋅10 
5
 ) — размер массива.

Во второй строке записаны 
n
n натуральных чисел 
a
1
,
a
2
,
…
,
a
n
a 
1
​
 ,a 
2
​
 ,…,a 
n
​
  (
1
≤
a
i
≤
n
1≤a 
i
​
 ≤n) — сам массив чисел.

Гарантируется, что сумма 
n
n по всем наборам входных данных не превосходит 
2
⋅
1
0
5
2⋅10 
5
 .

Выходные данные
Для каждого набора входных данных выведите в отдельной строке First, если при оптимальной игре выигрывает первый игрок, иначе выведите Second.
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = 0;
let t = null; // count input data
let currLen = null;

function findDuplicate(arr) {
  let obj = {};
  let res = null;
  arr.forEach(el => {
    if (!obj[el]) {
        obj[el] = 1;
    } else {
        obj[el]++;
        res = el;
    }
  });
  return res;
}


const fnTask = (arr, i_player) => {
    let newArr = [...arr];
    let a = arr[0]

    const aXorValue = findDuplicate(arr);

    if (aXorValue === null) { // дубликаты кончились
        return i_player - 1;
    }
    else {
        const replIdx = arr.findIndex(el => el === aXorValue);
        newArr[replIdx] = arr[replIdx] + 1;
        return fnTask(newArr, i_player + 1);
    }
}

rl.on("line", (input) => {
    if (lines === 0) {
        t = input;
    }
    else if (lines <= t * 2 && lines > 0){
        if (lines % 2 !== 0) {
            currLen = +input;
        }

        if (lines % 2 === 0){
            const data = input.split(' ').map(el => +el);
            const rs = fnTask(data, 0);
            console.log((rs % 2 === 0 || rs < 0) ? 'First' : 'Second')
        }
    } else {
        rl.close()
    }
    lines++;
});

