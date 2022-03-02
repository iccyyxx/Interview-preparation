/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var minprice = 0xffff;
  var maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
};
var prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));