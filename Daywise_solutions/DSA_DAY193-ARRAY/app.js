/**1122. Relative Sort Array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let k = 0;
    for(let i = 0; i < arr2.length; i++) {
        for(let j = k; j < arr1.length; j++) {
            if(arr1[j] === arr2[i]) {
                swap(arr1, j++, k++);
            }
        }
    }   
    for(let i = k; i < arr1.length; i++) {
        for(let j = i + 1; j < arr1.length; j++) {
            if(arr1[i] > arr1[j]) { 
                swap(arr1, i, j);
            }
        }
    }
    return arr1;
};

var swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(relativeSortArray([28,6,22,8,44,17], arr2 = [22,28,8,6]));
