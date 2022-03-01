/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var ans = [];
  // 排序
  nums.sort(function (a, b) {
    return a - b;
  })
  // 查找是否存在
  var find = function (l, c) {
    let r = nums.length - 1, mid;
    while (l < r) {
      mid = parseInt((l + r) / 2);
      if (nums[mid] == c) return mid;
      else if (nums[mid] > c) r = mid - 1;
      else if (nums[mid] < c) l = mid + 1;
    }
    if ((nums[l] == c) && (l == r)) return true;
    return false;
  }
  for (let a = 0; a < nums.length - 2;) {
    for (let b = a + 1; b < nums.length - 1;) {
      // 处理重复的情况
      while ((nums[a] == nums[a + 2]) && (a < nums.length - 3)) a++;
      while ((nums[b] == nums[b + 2]) && (b < nums.length - 2)) b++;
      let c = parseInt(-(nums[a] + nums[b]));
      if (find(b + 1, c)) ans.push([nums[a], nums[b], c]);
      if (nums[b] == nums[b + 1] && (b < nums.length - 2)) b++;
      b++;
    }
    if (nums[a] == nums[a + 1] && (a < nums.length - 3)) a++;
    a++;
  }
  return ans;
};
var nums = [-2, 0, 1, 1, 2];
console.log(threeSum(nums));