/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num string字符串 
 * @return string字符串
 */
function maxLexicographical(num) {
  // write code here
  num = [...num];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == '0') {
      while (num[i] == '0') {
        num[i++] = '1';
      }
      break;
    }
  }
  return num.join('');
}
let num = "1000";
console.log(maxLexicographical(num));
