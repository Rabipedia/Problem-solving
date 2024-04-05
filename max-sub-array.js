/**
 * 53. Maximum Subarray
 * Given an integer array nums, find the 
   subarray with the largest sum, and return its sum.
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
   Output: 6
   Explanation: The subarray [4,-1,2,1] has the largest sum 6.

 * @param {number[]} nums 
 * @returns {number}
 */

const maxSubArray = (nums) => {
    let max = -Infinity;
    let currentSubArr = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSubArr += nums[i];

        if(currentSubArr > max) {
            max = currentSubArr;
        }

        if(currentSubArr < 0) {
            currentSubArr = 0;
        }
    }

    return max;
}