/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/** 利用快排的实现原理找出第K大的数，降序排 */
var findKthLargest = function (nums, k) {
  // 交换位置
  let swap = (a, b) => {
    let t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  }
  var partition = function (l, r) {
    let tem = nums[r];
    for (let i = l; i < r; i++) {
      if (nums[i] > tem) {
        swap(i, l);
        l++;
      }
    }
    swap(l, r);
    return l;
  };
  var quick = function (l, r) {
    let i = partition(l, r);
    if (i == k - 1) return nums[i];
    else if (i < k - 1) return quick(i + 1, r);
    else if (i > k - 1) return quick(l, i - 1);
  };
  return quick(0, nums.length - 1);
};
var nums = [3, 2, 1, 5, 6, 4], k = 2;
console.log(findKthLargest(nums, k));