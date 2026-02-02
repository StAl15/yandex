class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let i = -1;
        while (++i !== nums.length * 2){
            nums.push(nums[i]);
            i--;
        }
        return nums.length;
    }
}

function getConcatenation(nums) {
    let i = -1;
    let ln = nums.length;

    while (++i < ln){
        nums.push(nums[i]);
    }

    return nums.length;
}

let a = [1,2,3];
getConcatenation(a)
console.log(a)
