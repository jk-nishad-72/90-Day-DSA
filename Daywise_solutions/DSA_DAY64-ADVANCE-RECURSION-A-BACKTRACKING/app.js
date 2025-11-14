/*
 * 1823. Find the Winner of the Circular Game
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var solve = function (k, arr, i) {
  if (arr.length === 1) return arr[0];
  i = (i + k) % arr.length;
  arr.splice(i, 1);
  return solve(k, arr, i);
};
var findTheWinner = function (n, k) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  k--;
  return solve(k, arr, 0);
};

//*—Tower of Hanoi
let plats = 3;

var towerOfHanoi = function (plats, s, h, d) {
  if (plats === 1) {
    console.log("move 1 plate from " + s + " to " + d);
    return;
  }
  towerOfHanoi(plats - 1, s, d, h);
  console.log("move " + plats + "plate to " + s + " to" + d);
  towerOfHanoi(plats - 1, h, s, d);
};
towerOfHanoi(plats, "S", "H", "D");
