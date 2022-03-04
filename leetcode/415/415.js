/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len = Math.max(num1.length, num2.length);
  let ans = []
  for (let i = 0; i <= len; i++) {
    ans.push(0);
  }
  let n1 = num1.length - 1, n2 = num2.length - 1;
  for (let i = 0; i < len; i++) {
    let tt = ans[len - i + 1];
    if (ans[len - i + 1] > 9) {
      ans[len - i] = parseInt(ans[len - i + 1] / 10);
      ans[len - i + 1] = ans[len - i + 1] % 10;
    }
    if (n1 >= 0 && n2 >= 0) {
      let t = parseInt(num1[n1--]) + parseInt(num2[n2--]);
      if (t > 9) ans[len - i - 1] += parseInt(t / 10);
      ans[len - i] += t % 10;
    }
    else if (n1 >= 0) ans[len - i] += parseInt(num1[n1--]);
    else if (n2 >= 0) ans[len - i] += parseInt(num2[n2--]);
  }
  return (ans[0] === 0 ? ans.join('').slice(1) : ans.join(''));
};
let num1 = "999", num2 = "1";
console.log(addStrings(num1, num2));
