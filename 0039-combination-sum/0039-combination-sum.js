var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (currentList, remaining, start) => {
        if (remaining === 0) {
            result.push([...currentList]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            currentList.push(candidates[i]);
            backtrack(currentList, remaining - candidates[i], i); // not i + 1 because we can reuse same elements
            currentList.pop();
        }
    };
    
    backtrack([], target, 0);
    return result;
};
