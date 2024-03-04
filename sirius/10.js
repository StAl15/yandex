function main(length, commands) {
    let stats = {};
    for (let i = 0; i < length; i++) {
        const splitCommands = commands[i].split(' ');
        if (splitCommands[0] === '+') {
            if (!stats[splitCommands[2]]) {
                stats[splitCommands[2]] = Number(splitCommands[1]);
            } else {
                stats[splitCommands[2]] = stats[splitCommands[2]] + Number(splitCommands[1]);
            }
        } else if (splitCommands[0] === '?') {
            let res = splitCommands[1].toString();

            for (let key in stats) {
                console.log(stats[key], stats[res], res)
                if (
                    key.startsWith(splitCommands[1].toString()) &&
                    stats[key] >= stats[res] &&
                    key.length <= res.length
                ) {
                    res = key.toString();
                } else {
                    console.log(res);
                }
            }
            console.log(res);
        }
    }
}

let arr = `+ 10 abacaba
? a
+ 11 aba
? a
+ 1 abacaba
? a
+ 1 abacaba
? a`.split('\n');
main(8, arr);
