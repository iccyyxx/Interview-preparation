/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/** 利用快排的实现原理找出第K大的数， */
var findKthLargest = function (nums, k) {
  // 转化为找出第k小的数
  k = nums.length - k;
  // 交换位置
  let swap = (a, b) => {
    let t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  }
  var partition = function (l, r) {
    let tem = nums[r];
    for (let j = l; j < r; j++) {
      if (nums[j] < tem) {
        swap(j, l);
        l++;
      }
    }
    swap(l, r);
    return l;
  };
  var quick = function (l, r) {
    let i = partition(l, r);
    if (i == k) return nums[i];
    else if (i < k) return quick(i + 1, r);
    else if (i > k) return quick(l, i - 1);
  };
  return quick(0, nums.length - 1);
};
var nums = [3, 2, 1, 5, 6, 4], k = 2;
console.log(findKthLargest(nums, k));