class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            const el = nums[i]

            if (map[el] === undefined) {
                map[el] = 1;
            } else {
                map[el]++;
            }
        }
        let i = -1;

        while (nums[++i] !== undefined) {
            if (map[nums[i]] > 1) {
                --map[nums[i]];
                nums.splice(i, 1);
                i--;
            }
        }

        return nums.length;
    }
}

// решение получше
function  removeDuplicates(nums) {
    let k = 0;

    for (let i = 1; i<nums.length; i++){
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    nums.length = k + 1;
    return nums.length;
}
