

let prompt = require('prompt-sync')();

//*— Q 64.Jewels and Stones 

let jwels = prompt('Enter jweles : ')
let stones = prompt('Enter stones : ')


let set = new Set()


//*— Q 65. 202. Happy Number**
  

var isHappy = function(n) {
    let set = new Set()
    while(true){
        let sum =0;
        while(n>0){
            let rem = n%10;
            sum = sum+ (rem*rem)
            n= Math.floor(n/10)
        }
     if(sum==1) return true;
     if(set.has(sum)) return false;
     else set.add(sum);
     n =sum;
    }
  return false;
};



//*** —Map


//* -Q 66.Find the frequency of each element



function characterFrequency(str) {
    let map = new Map()
    for(let i =0;i<str.length;i++){
        let asci = str.charCodeAt(i)
        if(asci>=97&&asci<=122){
        if(map.has(str.charAt(i))){
            map.set(str.charAt(i),map.get(str.charAt(i))+1)
        }else{
            map.set(str.charAt(i),1)
        }
      }
    }
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for(let [key,values] of sorted){
      console.log(key+": "+values)
  } 
}


