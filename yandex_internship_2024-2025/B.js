/*
не проходит тесты
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(n, m, args = []) {
    let tree = {};
    let count = 1;
    tree[1] = {root: 1, prev: 1};
    for (let i = 0; i < m; i++) {
        const [a, b] = args[i];
        let root = a;
        if (tree[b - 1]) {
            root = tree[b - 1].root
        }
        if (tree[a]) {
            root = tree[a].root;
        }
        tree[b] = {root: root, prev: b - 1};
        if (root === 1) count = Math.max(count, b);
    }
    console.log(count, tree)

}

let lines = 0;
let n = 0;
let m = 0;
let args = [];

rl.on("line", (input) => {
    if (lines === 0) {
        [n, m] = input.split(' ').map(Number);
    }
    if (lines > 0) {
        args.push(input.split(' ').map(Number));
    }
    if (lines === m) {
        main(n, m, args);
        rl.close();
    }
    lines++;
});

/*
5 2
1 3
2 4
4
 */

/*
5 2
1 2
4 5
2
 */


/*
это валится на 6 тесте

function maxWeightsPulled(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const intervals = lines.slice(1).map(line => {
        const [a, b] = line.trim().split(' ').map(Number);
        return { l: Math.min(a, b), r: Math.max(a, b) };
    });

    intervals.sort((a, b) => a.l - b.l);

    let componentStart = 1;
    let componentEnd = 1;

    for (const interval of intervals) {
        if (interval.l <= componentEnd + 1 && interval.r >= componentStart - 1) {
            componentStart = Math.min(componentStart, interval.l);
            componentEnd = Math.max(componentEnd, interval.r);
        } else if (interval.l > componentEnd + 1) {
            // Since intervals are sorted, no further intervals will overlap
            break;
        }
    }

    const totalWeightsPulled = componentEnd - componentStart + 1;
    console.log(totalWeightsPulled);
}

// Sample Input
const input = `5 2
1 3
2 4`;

// Call the function with the provided input
maxWeightsPulled(input);
 */
