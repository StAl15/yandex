function main(words) {
    let controlWord = 'TINKOFF'
    return words.map(word => word.replaceAll('', ' ')
        .split(' ')
        .filter(it => it !== '')
        .every(it => word.split(it).length === controlWord.split(it).length)
        ? 'Yes'
        : 'No'
    )
}

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
        args.push(input)
    }
    if (lines === countArgs) {
        main(args).forEach(it => console.log(it));
        rl.close();
    }
    lines++;
});

