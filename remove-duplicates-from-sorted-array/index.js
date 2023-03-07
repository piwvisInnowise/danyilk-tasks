/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1] ) {
            r = r + 1;
        }
        else {
            l = l + 1;
            nums[l] = nums[i+1]
        }
    }
    return l
}