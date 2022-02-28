/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  var ans = 0;
  if (s.length <= 1) return s.length;
  var exist = new Set(s[0]);
  for (let i = 0, j = i + 1; j < s.length;) {
    while (!exist.has(s[j]) && j < s.length) {
      exist.add(s[j]);
      j++;
    }
    ans = Math.max(ans, j - i);
    while (s[i] != s[j]) {
      exist.delete(s[i]);
      i++;
    }
    exist.delete(s[i]);
    i++;
  }
  return ans;
};
var s = "abcabcbb";
s = "abcba"
console.log(lengthOfLongestSubstring(s));