var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 1;
    }

    if (!root.left) {
        return 1 + minDepth(root.right);
    }

    if (!root.right) {
        return 1 + minDepth(root.left);
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
