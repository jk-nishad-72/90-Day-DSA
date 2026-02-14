let prompt = require("prompt-sync")();


var Merge94 = function () {

  let size = Number(prompt(" Enter Array size : "));

 

  let arr = new Array(size);

  for (let index = 0; index < size; index++) {
    arr[index] = parseInt(prompt(`Enter Array elements ${index + 1} : `));
  }
  console.log(mergeSort(arr, 0, arr.length - 1));
  function mergeSort(arr, left, right) {
    divideSort(arr, left, right);
    function divideSort(arr, left, right) {
      if (left >= right) return;
      let mid = Math.floor((left + right) / 2);
      divideSort(arr, left, mid);
      divideSort(arr, mid + 1, right);
      conquer(arr, left, mid, right);
    }
    function conquer(arr, left, mid, right) {
      let temp = new Array(right - left + 1).fill(0);
      let i = left,
        j = mid + 1,
        k = 0;
      while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
          temp[k++] = arr[i++];
        } else {
          temp[k++] = arr[j++];
        }
      }
      while (i <= mid) temp[k++] = arr[i++];
      while (j <= right) temp[k++] = arr[j++];

      i = left;
      k = 0;
      while (k < temp.length) {
        arr[i++] = temp[k++];
      }
    }

    return arr;
  }
};

Merge94();


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    return mergeSort(nums, 0, nums.length - 1);

    function mergeSort(arr, left, right) {
        if (left >= right) return;
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
        return arr;
    }

    function merge(arr, left, mid, right) {
        let temp = new Array(right - left + 1).fill(0);
        let i = left,
            j = mid + 1,
            k = 0;  
        while (i <= mid && j <= right) {
            if (arr[i] < arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

      
        
        for(let m = 0; m < temp.length; m++) {
            arr[left + m] = temp[m];
        }
        return arr;

    }
    

};


console.log(sortArray([5,2,3,1]));
