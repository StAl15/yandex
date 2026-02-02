class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        const map = {
            '[': ']',
            '{': '}',
            '(': ')'
        }
        
        if (s.length === 1) return false;

        stack.push(s[0]);

        let i = 1;
        while (i < s.length) {
            if (s[i] === map[stack.at(-1)]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
            i++;

        }
        return stack.length === 0;
    }
}
