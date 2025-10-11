


//*—Q 83. 88.Merge Two Sorted Array

let prompt = require('prompt-sync')();

let m = parseInt(prompt("Enter the number of elements in first array: "));

let nums1 = new Array(m)
for (let i = 0; i < m; i++) {
    nums1[i] = parseInt(prompt(`Enter element ${i + 1}: `));
}

let n = parseInt(prompt("Enter the number of elements in second array: "));

let nums2 = new Array(n)
for (let i = 0; i < n; i++) {
    nums2[i] = parseInt(prompt(`Enter element ${i + 1}: `));
}

// Add extra space to nums1 to accommodate nums2
for (let i = 0; i < n; i++) {
    nums1.push(0);
}

console.log("Before Merging:");
console.log("First Array:", nums1);
console.log("Second Array:", nums2);

var merge = function(nums1, m, nums2, n) {
    let k = m+n-1;
    let i = m-1
    let j = n-1
    while(i>=0&&j>=0) {
        if(nums1[i]>nums2[j]){
            nums1[k--] = nums1[i--]
        }
        else{
       nums1[k--] = nums2[j--]
        }
    }
    while(j>=0){
        nums1[k--] = nums2[j--]
    }

    return nums1;
};

console.log(merge(nums1, m, nums2, n));

