
var nextPermutation = function(nums) {
    let k = -1;
    let l = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            k = i;
        }
    }
    
    if (k === -1) {
      
        nums.reverse();
        return;
    }
    
    for (let i = k + 1; i < nums.length; i++) {
        if (nums[i] > nums[k]) {
            l = i;
        }
    }
    
    [nums[k], nums[l]] = [nums[l], nums[k]];
    
    nums.splice(k + 1, nums.length - k - 1, ...nums.slice(k + 1).reverse());
};
