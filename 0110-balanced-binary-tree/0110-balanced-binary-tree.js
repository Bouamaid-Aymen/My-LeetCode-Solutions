var isBalanced = function(root) {
    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };
    const isBalancedHelper = (node) => {
        if (!node) return true;
        if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
            return false;
        }
        return isBalancedHelper(node.left) && isBalancedHelper(node.right);
    };
    return isBalancedHelper(root);
};