/**
 * Given an integer array nums, find a subarray
   that has the largest product, and return the product.

   The test cases are generated so that the answer will fit in a 32-bit integer.

 

   Example 1:

   Input: nums = [2,3,-2,4]
   Output: 6
   Explanation: [2,3] has the largest product 6.
 * 
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = (nums) => {
    let res = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    const n = nums.length

    for(let i = 1; i < n; i++) {
        currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        currMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

        prevMax = currMax;
        prevMin = currMin;

        res = Math.max(prevMax, prevMin);
    }
    return res;
};