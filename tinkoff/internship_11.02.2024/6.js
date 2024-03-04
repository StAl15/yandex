function main(n, q, arrA, queries) {
    queries.forEach(it => {
        const args = it.split(' ').map((it, idx) => idx > 0 ? Number(it) : it);
        if (args[0] === '?') {
            const [znak, left, right, k, b] = args;
            let maxI = -1;
            let minI = 10000000000;
            arrA.forEach((item, idx_) => {
                if (idx_ >= left && idx_ <= right) {
                    minI = Math.min(item, k * idx_ + b);
                    console.log('srq: ', item, k * idx_ + b)
                    if (item <= minI) {
                        maxI = Math.max(maxI, item);
                    }
                }
            })
            console.log(maxI);
        }
        if (args[0] === '+') {
            arrA = arrA.map((it, idx) => idx >= args[1] && idx <= args[2] ? it + args[3] : it);
        }
    })
}

main(6, 3, [2, 4, 6, 8, 10, 12], [
    '? 2 5 3 0',
    '+ 2 3 6',
    '? 2 5 3 2',
])
