/**
 * Дан массив 
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
 . Требуется посчитать количество различных непустых подпоследовательностей массива, где все элементы различны. Две подпоследовательности различны, если существует индекс, присутствующий в первой подпоследовательности и отсутствующий во второй. Но так как ответ может быть слишком большим, то выведите его по модулю 
1
0
9
+
7
10 
9
 +7.

Подпоследовательностью массива называется последовательность 
a
i
1
,
a
i
2
,
…
,
a
i
k
a 
i 
1
​
 
​
 ,a 
i 
2
​
 
​
 ,…,a 
i 
k
​
 
​
  (
1
≤
i
j
≤
n
1≤i 
j
​
 ≤n), где 
i
j
−
1
<
i
j
i 
j−1
​
 <i 
j
​
  для всех 
j
>
1
j>1.

Входные данные
В первой строке записано единственное число 
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
n чисел 
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
1
0
9
1≤a 
i
​
 ≤10 
9
 ) — элементы массива.

Выходные данные
В единственной строке выведите единственное число — количество таких подпоследовательностей по модулю 
1
0
9
+
7
10 
9
 +7.


 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = 0;
let n = null; // size arr


const taskFn = (data) => {
    const fr = {};
    data.forEach(el => {
        if (!fr[el]) {
            fr[el] = 1;
        } else {
         fr[el]++;
        }
    });
    let ans = 1;
    Object.entries(fr).forEach(([key, value]) => {
        ans = ((value + 1) * ans) % (Math.pow(10, 9) + 7);
    })
    return (ans - 1);
}

rl.on("line", (input) => {
    if (lines === 0) {
        n = +input;
    }
    if (lines === 1){
        const data = input.split(' ').map(el => +el);
        console.log(taskFn(data) % (Math.pow(10, 9) + 7));
        rl.close();
    }

    lines++;
});

