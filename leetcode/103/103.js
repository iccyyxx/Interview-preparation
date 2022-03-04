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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let flag = true;//0为从左往右，1为从右往左
  let roo = [];
  roo.push(root);
  let ans = [];
  if (roo === null) return [];
  while (roo.length > 0) {
    let t = [], ans1 = [];
    for (let i = roo.length - 1; i >= 0; i--) {
      if (roo[i] != null) {
        ans1.push(roo[i].val);
        if (flag) t.push(roo[i].left, roo[i].right);
        else t.push(roo[i].right, roo[i].left);
      }
    }
    flag = !flag;
    roo = t;
    if (ans1.length > 0) ans.push(ans1);
  }
  return ans;
};