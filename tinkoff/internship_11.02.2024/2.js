function main(n, limits) {
    let adjList = new Map();

    function addVertex(vertex) {
        adjList.set(vertex, []);
    }

    function addEdge(vertex1, vertex2) {
        if (adjList.get(vertex1).length + 1 <= limits[vertex1 - 1] &&
            adjList.get(vertex2).length + 1 <= limits[vertex2 - 1] &&
            vertex1 !== vertex2
        ) {
            adjList.get(vertex1).push(vertex2);
            adjList.get(vertex2).push(vertex1); // для неориентированного графа
        }
    }

    limits.forEach((it, idx) => {
        addVertex(idx + 1);
    });

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            addEdge(i + 1, j + 1);
        }
    }
    let res = 'Yes';
    adjList.forEach((value, key, map) => {
        if (value.length === 0) {
            res = 'No'
        }
    });
    return (n === 1 && limits.includes(1000000000)) ? 'Yes' : res;
}

// console.log(main(1, [1000000000]))
// console.log(main(2, [1, 1]))
// console.log(main(3, [1, 1, 1]))
// console.log(main(4, [1, 1, 2, 2]))


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = 0;
let countArgs = 0;
let args = [];

rl.on("line", (input) => {
    if (lines === 0) {
        countArgs = Number(input);
    }
    if (lines > 0) {
        args.push(Number(input))
    }
    if (lines === countArgs*2) {
        args.map((it, idx) => console.log(main(it[idx], it[idx+1])))
        rl.close();
    }
    lines++;
});
