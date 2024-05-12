/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

// Test cases
console.log(containsNearbyDuplicate([1,2,3,1], 3)); // Output: true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // Output: true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // Output: false
