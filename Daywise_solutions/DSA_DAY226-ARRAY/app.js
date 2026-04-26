class Solution {
    sortHalf(arr) {
        // Write your code here 
        let a1 = [];
        let a2 = [];
        for(let i = 0;i<arr.length;i++){
             if(i < Math.floor(arr.length / 2)) a1.push(arr[i])
             else if(i >=Math.floor(arr.length / 2) ) a2.push(arr[i])
        }

        a1.sort((a,b) => a - b)
        a2.sort((a,b) => b - a) 
        console.log(a1 , a2)
        let res = [];
        for(let i = 0;i<a1.length;i++){
            res.push(a1[i])
        }
        for(let i = 0;i<a2.length;i++){
            res.push(a2[i])
        }
        return res;
    }
}

// Do not edit the code below.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = new Solution();

// console.log(res.sortHalf(arr));

function capitalizeEnds(str) {
    // Write your code here 
    let words = str.split(' ')
    // console.log(words)
    let result = ''
    for(let i = 0;i<words.length;i++){

        if(words[i].length === 2) {
            result += words[i].toLocaleUpperCase()+' '
        }else {
             result += words[i].slice(0,1).toLocaleUpperCase()
                   + words[i].slice(1,words[i].length-1) 
                   + words[i].slice(words[i].length-1 ,words[i].length).toLocaleUpperCase()
                   +' '
        }
    }
    return result
}

// console.log(capitalizeEnds('hello world'));





