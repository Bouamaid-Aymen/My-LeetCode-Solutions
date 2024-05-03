var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    let result = [];
    let start = nums[0], end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            result.push(start === end ? `${start}` : `${start}->${end}`);
            start = end = nums[i];
        }
    }

    result.push(start === end ? `${start}` : `${start}->${end}`);

    return result;
};
