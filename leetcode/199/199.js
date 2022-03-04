/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let ans = []
  let roo = [];
  roo.push(root);
  if (root === null) return [];
  while (roo.length > 0) {
    ans.push(roo[roo.length - 1].val);
    let t = [];
    for (let i = 0; i < roo.length; i++) {
      if (roo[i] != null) {
        if (roo[i].left != null) t.push(roo[i].left);
        if (roo[i].right != null) t.push(roo[i].right);
      }
    }
    roo = t;
  }
  return ans;
};