/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) {
        return 0;
    }

    let jumps = 0;
    let end = 0;
    let maxReach = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (i === end) {
            jumps++;
            end = maxReach;
        }
    }

    return jumps;
};
