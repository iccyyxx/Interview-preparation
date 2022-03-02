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
var inorderTraversal = function (root) {
  var ans = [];
  var fun = function (roo) {
    if (roo != null) {
      if (roo.left != null) {
        fun(roo.left);
      }
      ans.push(roo.val);
      if (roo.right != null) fun(roo.right);
    }
  }
  fun(root);
  return ans;
};