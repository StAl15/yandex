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
let arr1 = [0,0,1,2,3];

console.log(removeDuplicates(arr1))
console.log(arr1)
