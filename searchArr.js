/**
 * 33. Search in Rotated Sorted Array
 * 
 */

const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor(start + end / 2);

        if(nums[mid] === target){
            return nums[mid];
        }
        if(nums[start] <= nums[mid]){
            if(nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
            
    }
    return -1;
}

console.log(search([9,8,6,0,1,2,3], 2))