/**
 * 238. Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] 
 * is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const n = nums.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    for(let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for(let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    let answer = [];
    for(let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }

    return answer;
};

productExceptSelf([1, 2, 3, 4])