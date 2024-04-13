
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true; 
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); 
};


const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1));

const p2 = new TreeNode(1, new TreeNode(2), null);
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); 

const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3));
