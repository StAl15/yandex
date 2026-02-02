class MinStack {
    constructor() {
        this.stack = [];
        this.n = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const rs = {
            val,
            min: this.n > 0
                ? this.stack.reduce((curr, acc) => Math.min(curr, acc.val), val)
                : val
        }
        this.stack.push(rs)
        this.n++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.length = this.n - 1;
        this.n--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1).val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1).min;
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
console.log(minStack.top());    // return 2
minStack.getMin(); // return 1
