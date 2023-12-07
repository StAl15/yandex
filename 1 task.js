function f(bancnotes, coins, rPrice, dAutomat, count) {
    if (bancnotes + coins < rPrice) {
        return count;
    }
    if ((bancnotes + coins) % rPrice === 0) {
        return f(0, 0, rPrice, 0, count + ((bancnotes + coins) / rPrice));
    }
    if (dAutomat >= 0) {
        let t1 = Math.trunc(coins / rPrice);
        if (t1 > 0) {
            return f(bancnotes, coins % rPrice, rPrice, dAutomat + t1 * rPrice, count + t1);
        } else {
            let t2 = 1_000_000 + (coins % rPrice) - rPrice;
            if (dAutomat - t2 < 0) {
                return count;
            } else {
                return f(bancnotes - 1_000_000, coins - coins % rPrice + t2, rPrice, dAutomat - t2, count + 1);
            }
        }
    }
    if (dAutomat < 0) {
        return count;
    }
}

let count = 0;
let b = 10 * 1_000_000;
let c = 700_000;
let rPrice = 350_000;
let dAutomat = 200_000;
let res = f(b, c, rPrice, dAutomat, count);
console.log('f = ' + res);