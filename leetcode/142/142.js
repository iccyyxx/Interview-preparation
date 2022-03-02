/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var m = new Map();
  var cur = head;
  var index = 0;
  while (!m.has(cur)) {
    m.set(cur, index);
    if (cur == null) return null;
    cur = cur.next;
    if (cur == null) return null;
  }
  return cur;
};