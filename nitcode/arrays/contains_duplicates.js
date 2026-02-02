class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        let r = false;
        nums.forEach(el => {
            if (map[el] === undefined) {
                map[el] = 1;
            } else {
                r = true
            }
        })
        return r;
    }
}


// 0 1 1 2 3 ^ 0 1 2 3
