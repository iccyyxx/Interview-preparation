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
var levelOrder = function(root) {
    var ans=[];
    var t=[];
    t.push(root);
    if (root==null) return [];
    while(t.length){
        let tem=[],ans1=[]
        for(let i=0;i<t.length;i++){
            if (t[i]!=null) {
                ans1.push(t[i].val);
            if (t[i].left!=null) tem.push(t[i].left);
            if (t[i].right!=null) tem.push(t[i].right);
            }
        }
        ans.push(ans1);
        t=tem;
    }
    return ans;
};