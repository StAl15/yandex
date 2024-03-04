function main(n, m, q, arrN, queries) {
    let friendConnections = {};
    queries.forEach((it_, idx) => {
        let query = it_.split(' ').map(it => it === '?' || it === '+' ? it : Number(it));
        if (query[0] === '?') {
            const [znak, v] = query;
            console.log(friendConnections[v].stickers);
        } else if (query[0] === '+') {
            const [znak, u, amount] = query;
            friendConnections[u].friends.map((friend) => {
                friendConnections[friend].stickers = friendConnections[friend].stickers + amount;
            });
        } else {
            const [v, u] = query;
            if (!friendConnections[v]) {
                friendConnections[v] = {
                    friends: [u],
                    stickers: arrN[v - 1]
                }

            } else {
                friendConnections[v] = {
                    friends: [...friendConnections[v].friends, u],
                    stickers: arrN[v - 1]
                }
            }

            if (!friendConnections[u]) {
                friendConnections[u] = {
                    friends: [v],
                    stickers: arrN[u - 1]
                }

            } else {
                friendConnections[u] = {
                    friends: [...friendConnections[u].friends, v],
                    stickers: arrN[u - 1]
                }
            }
        }
    })
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = 0;
let n, m, q = 0;
let arrN = [];
let queries = [];

rl.on("line", (input) => {
    if (lines === 0) {
        let args = input.split(' ').map(it => Number(it));
        n = args[0];
        m = args[1];
        q = args[2];
    }
    if (lines === 1) {
        arrN = input.split(' ').map(it => Number(it));
    }
    if (lines > 1) {
        queries.push(input);
    }
    if (lines === q + m + 1) {
        main(n, m, q, arrN, queries);
        rl.close();
    }
    lines++;
});
