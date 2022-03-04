/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  const dfs = (roo) => {
    if (roo === null) return false;
    let l = dfs(roo.left);
    let r = dfs(roo.right);
    if ((l && r) || ((roo.val === q.val || roo.val === p.val) && (l || r)))
      ans = roo;
    return l || r || (roo.val === q.val || roo.val === p.val);
  }
  dfs(root);
  return ans;
};
