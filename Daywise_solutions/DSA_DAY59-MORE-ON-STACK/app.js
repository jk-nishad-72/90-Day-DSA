/** —Q 134. Stock Span Problem gfg
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  calculateSpan(arr) {
    // code here
    let st = [];
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
      while (st.length != 0 && arr[st[st.length - 1]] <= arr[i]) {
        st.pop();
      }
      if (st.length == 0) ans[i] = i + 1;
      else {
        ans[i] = i - st[st.length - 1];
      }
      st.push(i);
    }

    return ans;
  }
}

//*—Q 135. 84. Largest Rectangle in Histogram ✅

var largestRectangleArea = function (heights) {
  let st1 = [];
  let left = [];
  for (let i = 0; i < heights.length; i++) {
    while (st1.length != 0 && heights[st1[st1.length - 1]] >= heights[i]) {
      st1.pop();
    }
    if (st1.length == 0) left[i] = -1;
    else {
      left[i] = st1[st1.length - 1];
    }
    st1.push(i);
  }

  let st2 = [];
  let right = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    while (st2.length != 0 && heights[st2[st2.length - 1]] >= heights[i]) {
      st2.pop();
    }
    if (st2.length == 0) right[i] = heights.length;
    else {
      right[i] = st2[st2.length - 1];
    }
    st2.push(i);
  }

  ans = 0;

  for (let i = 0; i < heights.length; i++) {
    ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
  }

  return ans;
};

/**
 **85. Maximal Rectangle
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;
  let heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == "1") heights[j] += 1;
      else if (matrix[i][j] == 0) heights[j] = 0;
    }
    let area = largestRectangleArea(heights);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};
var largestRectangleArea = function (heights) {
  let st1 = [];
  let left = [];
  for (let i = 0; i < heights.length; i++) {
    while (st1.length != 0 && heights[st1[st1.length - 1]] >= heights[i]) {
      st1.pop();
    }
    if (st1.length == 0) left[i] = -1;
    else {
      left[i] = st1[st1.length - 1];
    }
    st1.push(i);
  }

  let st2 = [];
  let right = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    while (st2.length != 0 && heights[st2[st2.length - 1]] >= heights[i]) {
      st2.pop();
    }
    if (st2.length == 0) right[i] = heights.length;
    else {
      right[i] = st2[st2.length - 1];
    }
    st2.push(i);
  }

  ans = 0;

  for (let i = 0; i < heights.length; i++) {
    ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
  }

  return ans;
};
