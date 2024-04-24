
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const rootIndexInorder = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(1, rootIndexInorder + 1), inorder.slice(0, rootIndexInorder));
    root.right = buildTree(preorder.slice(rootIndexInorder + 1), inorder.slice(rootIndexInorder + 1));

    return root;
};
