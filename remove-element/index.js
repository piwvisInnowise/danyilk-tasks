/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[l] = nums[i]
            l = l + 1
        }
    }
    return l
};