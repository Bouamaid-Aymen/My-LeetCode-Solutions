var buildTree = function(inorder, postorder) {
    const indexMap = new Map();
    inorder.forEach((val, index) => {
        indexMap.set(val, index);
    });
    
    const build = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }
        
        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);
        
        const rootIndex = indexMap.get(rootVal);
        

        const leftSubtreeSize = rootIndex - inStart;
        
        root.left = build(inStart, rootIndex - 1, postStart, postStart + leftSubtreeSize - 1);
        root.right = build(rootIndex + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1);
        
        return root;
    };
    
    return build(0, inorder.length - 1, 0, postorder.length - 1);
};
